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
import { TemplateActionTypes } from '@modules/editor/actions/template.actions';
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

interface HomeResource {
  title: string;
  subTitle: string;
  imgSrc: string;
  linkSrc: string;
}

const getResourceCard = (cardInfo: HomeResource) => {
  return (
    <div
      key={cardInfo.imgSrc}
      className={cs([style['resource-card'], 'resource'])}
      onClick={() => {
        window.open(cardInfo.linkSrc);
        logEvent({
          eventType: 'RESOURCE_CARD',
          action: LogAction.click,
          extra: { cardTitle: cardInfo.title }
        });
      }}>
      <img src={cardInfo.imgSrc} alt={cardInfo.title} />
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
  const intl = useIntl();
  const dispatch = useDispatch();
  const { userId } = useGetDeviceId();
  const chain = useChainProfile();

  const templateState: ITemplateState = useSelector(
    (state: IStateTypes) => state.template
  );
  const { templates } = templateState;

  const history = useHistory();
  const _newProject = useProjectCreate(userId, chain);
  const _createProject = useCallback(
    (t: ITemplate) => {
      confirmDialog(t.name, t.describe, {
        okText: 'Use Template To Create',
        onOk: () => {
          _newProject(
            t.key,
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
    [_newProject, history]
  );

  useEffect(() => {
    dispatch({ type: TemplateActionTypes.LOAD_TEMPLATES, data: chain });
  }, [chain, dispatch]);

  const resourceCardList: HomeResource[] = useMemo(
    () => [
      {
        title: intl.formatMessage({ id: 'HomePage' }),
        subTitle: intl.formatMessage({ id: 'HomePageSubTitle' }),
        imgSrc: require('../../../../../../assets/static/img/ethereum/eth-homepage.png'),
        linkSrc: 'https://chainide-home-dev.whitematrix.workers.dev/'
      },
      {
        title: 'Dfinity Internet Computer',
        subTitle:
          'Develop internet-scale dapps, defi & cyber rails using canister smart contracts',
        imgSrc: require('../../../../../../assets/static/img/ethereum/eth-github.png'),
        linkSrc: 'https://dfinity.org/developers/'
      },
      {
        title: intl.formatMessage({ id: 'DfinityDevOfficial' }),
        subTitle: intl.formatMessage({ id: 'DfinityDevOfficialSubTitle' }),
        imgSrc: require('../../../../../../assets/static/img/ethereum/eth-website.png'),
        linkSrc: 'https://discord.com/invite/2S2yqSb4hA'
      },
      {
        title: intl.formatMessage({ id: 'OfficialForums' }),
        subTitle: intl.formatMessage({ id: 'OfficialForumsSubTitle' }),
        imgSrc: require('../../../../../../assets/static/img/ethereum/eth-doc.png'),
        linkSrc: 'https://forum.chainide.com/'
      }
    ],
    [intl]
  );

  const getTemplate = (t: ITemplate) => {
    return (
      <Stack
        styles={stackStyles}
        key={t.key}
        onClick={(e) => {
          e.stopPropagation();
          _createProject(t);
        }}>
        <div className={cs([style['template-card'], 'template'])}>
          <div className={style['top-part']}>
            <img src="/static/img/dfinity/dfinity.png" alt="" />
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
          <div className={cs(style.circle, style.circle5)}></div>
          <div className={cs(style.circle, style.circle4)}></div>
          <div className={cs(style.circle, style.circle3)}></div>
          <div className={cs(style.circle, style.circle2)}></div>
          <div className={cs(style.circle, style.circle1)}></div>
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
            src={require('../../../../../../assets/static/img/dfinity/dfinity-log.svg')}
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
