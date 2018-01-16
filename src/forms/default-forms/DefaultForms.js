import React from 'react'
import Widget from '../../elements/Widget'
import TextInputs from './TextInputs'
import RadioInputs from './RadioInputs'
import InlineForms from './InlineForms'
import SelectMenus from './SelectMenus'
import Checkboxes from './Checkboxes'
import InputSizing from './InputSizing'
import '../../css/forms/default-forms.css'

const DefaultForms = () => (
  <div>
    <div className="row">
      <div className="col-12 col-lg-6 mx-auto">
        <Widget title="Create Offer" description="">
          <TextInputs />
        </Widget>
      </div>
    </div>
  </div>
)
export default DefaultForms
