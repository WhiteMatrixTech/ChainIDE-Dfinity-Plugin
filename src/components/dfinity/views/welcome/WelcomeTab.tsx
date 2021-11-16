import React, { useCallback, useEffect, useMemo } from 'react';
import cs from 'classnames';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { Scroll } from '@modules/common/components';
import {
  LogOnMount,
  logEvent,
  LogAction
} from '@modules/common/utils/analyticsUtils';
import { IStateTypes } from 'store/types';
import {
  IChainType,
  TemplateActions
} from '@modules/editor/actions/template.actions';
import { ITemplateState } from '@modules/editor/reducers/template.reducer';
import { ITemplate } from '@modules/editor/services/templateService/ITemplateService';
import { useProjectCreate } from '@modules/projects/hooks/useProjectOperator';
import {
  divideStyle,
  firstFontStyle,
  secondFontStyle,
  stackStyles
} from './style';
import style from './style.less';
import { useChainProfile } from '@modules/common/hooks/chainProfile/useChainProfile';
import { useHistory } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { confirmDialog } from '@modules/common/components/dialog';
import { useGetDeviceId } from '@modules/accounts/hooks';
import { Locale } from '@modules/editor/actions/locale.actions';

interface HomeResource {
  title: string | JSX.Element;
  subTitle: string | JSX.Element;
  key: string;
  linkSrc: string;
}

const getResourceCard = (cardInfo: HomeResource) => {
  return (
    <div
      key={cardInfo.key}
      className={cs([style['resource-card'], 'resource'])}
      onClick={() => {
        window.open(cardInfo.linkSrc);
        logEvent({
          eventType: 'RESOURCE_CARD',
          action: LogAction.click,
          extra: { cardTitle: cardInfo.title }
        });
      }}>
      <div className={cs(style.cardIcon, cardInfo.key)} />
      <div style={firstFontStyle} className={style['resource-card-title']}>
        {cardInfo.title}
      </div>
      <div style={secondFontStyle} className={style['resource-card-subtitle']}>
        {cardInfo.subTitle ? cardInfo.subTitle : cardInfo.subTitle}
      </div>
    </div>
  );
};

export function WelcomeTab() {
  const dispatch = useDispatch();
  const { userId } = useGetDeviceId();
  const chain = useChainProfile();
  const { formatMessage } = useIntl();

  const { language } = useSelector((state: IStateTypes) => state.language);
  const externalLinks = useMemo(() => {
    return {
      [Locale.EN]: 'https://chainide.gitbook.io/chainide-english-1/',
      [Locale.ZH]: 'https://chainide.gitbook.io/chainide-chinese/'
    };
  }, []);
  const resourceCardList: HomeResource[] = useMemo(
    () => [
      {
        title: formatMessage({ id: 'HomePage' }),
        subTitle: formatMessage({ id: 'HomePageSubTitle' }),
        linkSrc: 'https://chainide.com/',
        key: 'home'
      },
      {
        title: formatMessage({ id: 'DfinityExplorer' }),
        subTitle: formatMessage({ id: 'DfinityExplorerSubTitle' }),
        linkSrc: 'https://www.dfinityexplorer.org/',
        key: 'explorer'
      },
      {
        title: formatMessage({ id: 'ChainIDEDocument' }),
        subTitle: formatMessage({ id: 'ChainIDEDocumentSubTitle' }),
        linkSrc: externalLinks[language],
        key: 'document'
      },
      {
        title: formatMessage({ id: 'OfficialForums' }),
        subTitle: (
          <FormattedMessage
            id="OfficialForumsSubTitle"
            values={{ chain: 'Dfinity' }}
          />
        ),
        linkSrc: 'https://forum.chainide.com/',
        key: 'forums'
      }
    ],
    [externalLinks, formatMessage, language]
  );

  const templateState: ITemplateState = useSelector(
    (state: IStateTypes) => state.template
  );
  const { templates } = templateState;

  const history = useHistory();
  const _newProject = useProjectCreate(userId, chain);
  const _createProject = useCallback(
    (t: ITemplate) => {
      confirmDialog(t.name, t.describe, {
        okText: formatMessage({ id: 'useTemplateToCreate' }),
        cancelText: formatMessage({ id: 'cancelText' }),
        onOk: () => {
          _newProject(
            t.id,
            true,
            (chain: string, id: string, readmePath?: string) => {
              history.replace(
                `/${chain}/${id}${
                  readmePath ? `open=${readmePath}&type=md_preview` : ''
                }`
              );
            }
          );
        }
      });
    },
    [_newProject, history, formatMessage]
  );

  useEffect(() => {
    dispatch(TemplateActions.loadTemplates(chain as IChainType, true));
  }, [chain, dispatch]);

  const getTemplate = (t: ITemplate) => {
    return (
      <Stack
        styles={stackStyles}
        key={t.id}
        onClick={(e) => {
          e.stopPropagation();
          _createProject(t);
        }}>
        <div className={cs([style['template-card'], 'template'])}>
          <div className={style['top-part']}>
            <img
              src={require('../../../../../../assets/static/img/dfinity/dfinity.png')}
              alt=""
            />
            <div style={firstFontStyle} className={style['template-name']}>
              {t.name}
            </div>
            <div style={secondFontStyle} className={style['template-version']}>
              {t.version}
            </div>
          </div>
          <div className={style['template-desc']}>{t.describe}</div>
        </div>
      </Stack>
    );
  };

  return (
    <Scroll>
      <div className={style.welcomePage}>
        <LogOnMount eventType="WELCOME_EXPOSURE" action={LogAction.exposure} />
        <div className={style.head}>
          <div className={style.headBg}></div>
          <div className={cs(style.decorate, style.circle)}></div>
        </div>
        <img
          src={require('../../../../../../assets/static/img/img-logo-chainide.png')}
          width="290px"
          alt="ChainIDE"
        />

        <div style={secondFontStyle} className={style['ide-introduction']}>
          <FormattedMessage id="welcomeTitle" />
          <img
            width="140"
            src={require('../../../../../../assets/static/img/dfinity/dfinity-logo.svg')}
            alt="dfinity logo"
          />
        </div>
        <a href="https://chainide.com/" target="_blank" rel="noreferrer">
          <img
            src="https://img.shields.io/badge/Chainide-v2.0.0-purple"
            width="106px"
            height="22px"
            alt="https://chainide.com/"
          />
        </a>
        <div className={style['ide-resource']}>
          {resourceCardList.map((card) => getResourceCard(card))}
        </div>
        <div style={divideStyle} className={style.divide}></div>
        <div style={firstFontStyle} className={style['first-level-title']}>
          <FormattedMessage id="Templates" />
        </div>
        <div className={style['template-list']}>
          {templates.map((t) => getTemplate(t))}
        </div>
      </div>
    </Scroll>
  );
}
