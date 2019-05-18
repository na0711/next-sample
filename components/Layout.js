import React , { Component } from 'react';
import Head from 'next/head';
import Header from './Header';
import style from '../static/Style';


class Layout extends Component {
  render(){
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name='description' content='{this.props.description}' />
        </Head>
        {style}
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;