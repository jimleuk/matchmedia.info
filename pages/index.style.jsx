import React from 'react'

export default () => (<style jsx="true">{`
* {
  box-sizing: border-box
}

body {
  font-family: Helvetica, Arial, sans-serif;
  background-color: rgb(247, 247, 247);
  color: #283b46;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 64px;
  padding-bottom: 64px;
}

.collection {
  max-width: 480px;
}

.page {
  padding-left: 16px;
  padding-right: 16px;
}

h2 {
  color: #F24529
}

table {
  width: 100%;
  border: 0;
}

tr:hover td {
  background-color: rgba(100, 100, 100, 0.1);
}

td {
  padding: 3px 0;
}

.credit {
  padding-top: 64px;
  font-size: 12px;
  color: #999;
}

.credit a {
  text-decoration: none;
  color: #F24529;
}

.credit a:hover {
  text-decoration: underline;
}

.where-credit-is-due {
  margin-bottom: 4px;
}

.where-credit-is-due a {
  color: #999;
  text-decoration: underline;
}
`}</style>)