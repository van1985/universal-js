import DocumentTitle from 'react-document-title';
import React from 'react';

import EditForm from '../EditForm';

const Edit = () => (
  <DocumentTitle title="Edit your name">
    <EditForm
      action="/"
      inputName="name"
      inputPlaceholder="Your names..."
    />
  </DocumentTitle>
);

export default Edit;
