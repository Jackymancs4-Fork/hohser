import { Domain, DisplayStyle } from 'src/types';
import * as React from 'react';
import AddDomain from '../AddDomain/AddDomain';
import { CssBaseline } from '@material-ui/core';


import TopBar from '../TopBar/TopBar';
import BottomBar from '../BottomBar/BottomBar';

export interface Props {
  domainsList: Array<Domain>;
  domainsListLoading: boolean;
  addDomain: (domainName: string, display: DisplayStyle) => void;
  removeDomain: (index: number) => void;
  fetchDomainsList: () => void;
  importFromOldVersion: () => void;
}

class App extends React.Component<Props> {
  constructor (props: Props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchDomainsList();
  }

  componentWillUpdate (nextProps: Props) {
    if (this.props.domainsListLoading && !nextProps.domainsListLoading) {
      this.props.importFromOldVersion();
    }
  }

  removeDomainHandle (index: number) {
    this.props.removeDomain(index);
  }

  public render () {
    return [
      <CssBaseline />,
      <TopBar />,
      <AddDomain addDomain={this.props.addDomain} />,
      <div style={{paddingTop: 48}}>
        {Object.keys(this.props.domainsList).map((item, i) => (
          <li key={i}>
            {this.props.domainsList[item].domainName} -
            {this.props.domainsList[item].display ? <span>{this.props.domainsList[item].display}</span> : null} -
            {this.props.domainsList[item].color ? <span>{this.props.domainsList[item].color}</span> : null} -
            <span onClick={() => this.removeDomainHandle(i)}>❌</span>
          </li>
        ))
        }
      </div>,
      <BottomBar />
    ];
  }
}

export default App;
