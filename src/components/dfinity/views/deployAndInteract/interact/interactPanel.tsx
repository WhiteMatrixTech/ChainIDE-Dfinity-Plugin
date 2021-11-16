import React, { useState, useCallback, useEffect, useContext } from 'react';
import { FontIcon, Spinner, SpinnerSize } from 'office-ui-fabric-react';
import { Tree, TreeItem, Key } from '@modules/common/components/tree';
import { InteractItem } from './interactItem';
import { LocalStorage } from '@modules/common/utils/storage';
import { dfinity } from '../../../type';
import cs from 'classnames';
import styles from './interactPanel.less';
import { useProjectState } from '@modules/projects/hooks/useProjectState';
import fileSystemService from '@modules/filesystem/service';
import outputService from '@modules/editor/services/outputService';
import { LogSource } from '@modules/editor/services/outputService/IOutputService';
import { toUri } from '@modules/common/utils/fileUtils';
import { DfinityContext } from '../../../DfinityProvider';

export const InteractPanel = () => {
  const { currentProjectId } = useProjectState();
  const { deployedDfinityProjects } = useContext(DfinityContext);
  const [expandKeys, setExpandKeys] = useState<Key[]>([]);

  const _onExpand = useCallback((expandedKeys: Key[]) => {
    setExpandKeys(expandedKeys);
  }, []);

  const [loadingPath, setLoadingPath] = useState('');
  const removeStorageFile = useCallback(
    (path: string) => {
      if (currentProjectId) {
        setLoadingPath(path);
        fileSystemService
          .delete(toUri(currentProjectId, path))
          .then(() => {
            const storage = new LocalStorage();
            const newExpandKeys = expandKeys.filter((h) => {
              return !h.toString().includes(path);
            });
            storage.set('new/ui/eth/interact', newExpandKeys);
          })
          .catch((e) => {
            outputService.handleErrorSingle(
              `Error while remove deployed file: ${e.message}`,
              LogSource.DEPLOY
            );
          })
          .finally(() => {
            setLoadingPath('');
          });
      }
    },
    [currentProjectId, expandKeys]
  );

  useEffect(() => {
    const storage = new LocalStorage();
    storage.get('new/ui/eth/interact').then((state) => {
      state && setExpandKeys(state);
    });
  }, []);

  useEffect(() => {
    const storage = new LocalStorage();
    storage.set('new/ui/eth/interact', expandKeys);
  }, [expandKeys]);

  return (
    <div className={styles.treeWrap}>
      <Tree expandKeys={expandKeys} onExpand={_onExpand}>
        {deployedDfinityProjects.map(
          ({ canisterList, networkAddress, deployedFilePath }) => {
            return (
              <React.Fragment key={deployedFilePath}>
                <TreeItem
                  itemKey={deployedFilePath}
                  PrefixIcon={<FontIcon iconName="FabricFolder" />}
                  title={networkAddress}
                  actions={
                    loadingPath === deployedFilePath ? (
                      <Spinner size={SpinnerSize.small} />
                    ) : (
                      <FontIcon
                        className={styles.actionIcon}
                        onClick={(e) => {
                          e.stopPropagation();
                          removeStorageFile(deployedFilePath);
                        }}
                        iconName="Delete"
                      />
                    )
                  }>
                  {canisterList.map((canister) => {
                    return _renderCanisterItem(
                      networkAddress,
                      deployedFilePath,
                      canister
                    );
                  })}
                </TreeItem>
              </React.Fragment>
            );
          }
        )}
      </Tree>
    </div>
  );

  function _renderPrefixIcon() {
    return <FontIcon className={cs(styles.yellow)} iconName="Footer" />;
  }

  function _renderCanisterItem(
    networkAddress: string,
    fileName: string,
    canister: dfinity.ICanisterDefinition
  ) {
    return (
      <TreeItem
        key={`${networkAddress}-${canister.canisterName}`}
        itemKey={`${networkAddress}-${canister.canisterName}`}
        title={`canister: ${canister.canisterName}`}
        actions={
          <FontIcon
            onClick={(e) => {
              e.stopPropagation();
              _openAssetsLink(canister);
            }}
            className={styles.cursor}
            iconName="OpenInNewWindow"
          />
        }>
        {canister.canisterFunctions.map((canisterFunction, i) => {
          return _renderFunctionHeader(
            fileName,
            networkAddress,
            canister,
            canisterFunction,
            i
          );
        })}
      </TreeItem>
    );
  }

  function _renderFunctionHeader(
    fileName: string,
    networkAddress: string,
    canister: dfinity.ICanisterDefinition,
    canisterFunction: dfinity.ICanisterFunction,
    index: number
  ) {
    return (
      <TreeItem
        PrefixIcon={_renderPrefixIcon()}
        className={styles.treeItemWrap}
        key={`${networkAddress}-${canister.canisterName}-${canisterFunction.functionName}`}
        itemKey={`${networkAddress}-${canister.canisterName}-${canisterFunction.functionName}`}
        title={canisterFunction.functionName}>
        <InteractItem
          networkAddress={networkAddress}
          canisterFunction={canisterFunction}
          fileName={fileName}
          canister={canister}
          index={index}
        />
      </TreeItem>
    );
  }

  function _openAssetsLink(canister: dfinity.ICanisterDefinition) {
    window.open(canister.candidUI);
  }
};
