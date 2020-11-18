import * as React from 'react'
import IndexLayout from '../layouts'
import style from './test.module.less'
import Page from "../components/Page";

const entrance = () => {
  return <IndexLayout>
    <Page>
      <p className={style.test}>1</p>
    </Page>
  </IndexLayout>
}

export default entrance;
