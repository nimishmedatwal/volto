import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import ContentsWorkflowModal from './ContentsWorkflowModal';

const mockStore = configureStore();

jest.mock('../Form/ModalForm', () => jest.fn(() => <div id="modalform" />));

describe('ContentsWorkflowModal', () => {
  it('renders a contents workflow modal component', () => {
    const store = mockStore({
      workflow: {
        transition: {
          loading: false,
          loaded: true,
        },
        multiple: [],
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <ContentsWorkflowModal
          open
          onOk={() => {}}
          onCancel={() => {}}
          items={['/blog']}
        />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
