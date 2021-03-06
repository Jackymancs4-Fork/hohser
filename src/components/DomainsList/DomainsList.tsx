import * as React from 'react';
import { IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/Favorite';
import OffIcon from '@material-ui/icons/VisibilityOff';
import BlockIcon from '@material-ui/icons/Opacity';
import { Domain } from 'src/types';
import { HIGHLIGHT, PARTIAL_HIDE, FULL_HIDE } from 'src/constants';

interface Props {
  domainsList: Array<Domain>;
  removeDomainHandle: (index: number) => void;
  editDomainHandle: (index: number) => void;
}

const DomainsList = (props: Props) => {

  // TODO Make colors as variables
  const domainColors = {
    COLOR_0 :"#ffffff",
    COLOR_1 :"#f50057",
    COLOR_2 :"#8BC34A",
    COLOR_3 :"#03A9F4",
  };

  return (
    <List style={{ position: "absolute", top: 54, bottom: 116, overflowY: "scroll", overflowX: "hidden", width: "100%" }}>
      {Object.keys(props.domainsList).map((item, i, arr) => ([
        <ListItem
          button
          onClick={() => props.editDomainHandle(i)}
        >
          <ListItemText primary={props.domainsList[item].domainName} />
          <ListItemSecondaryAction>
            {props.domainsList[item].display === HIGHLIGHT ?
              <IconButton disabled>
                <FavoriteBorderIcon style={{color: `${domainColors[props.domainsList[item].color] || domainColors.COLOR_0}`}} />
              </IconButton> : null
            }
            {props.domainsList[item].display === PARTIAL_HIDE ?
              <IconButton disabled>
                <BlockIcon />
              </IconButton> : null
            }
            {props.domainsList[item].display === FULL_HIDE ?
              <IconButton disabled>
                <OffIcon />
              </IconButton> : null
            }
            <IconButton aria-label="Delete" onClick={() => props.removeDomainHandle(i)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>,
        <div>{arr.length !== i + 1 ? <Divider /> : null}</div> // Do not display for last record
      ]))}
    </List>
  );
};

export default (DomainsList);
