import SocialMediaProperties from './SocialMediaProperties';

const SocialMediaTrait = (editor) => {
  editor.TraitManager.addType('social-media-traits', {
    createInput({ trait }) {
      const el = document.createElement('div');
      el.style.display = 'flex';

      ReactDOM.render(
        <SocialMediaProperties
          updateTrait={this.updateTrait}
          traits={this.state.traits}
        />,
        el
      );

      return el;
    },

    updateTrait: (name, value) => {
      this.setState((prevState) => ({
        traits: {
          ...prevState.traits,
          [name]: value,
        },
      }));
    },
  });

  editor.BlockManager.add('social-media-block', {
    label: 'Social Media Block',
    content: `<div data-gjs-type="default" trait="social-media-traits">hghg</div>`,
    traits: [
      {
        type: 'social-media-traits',
        name: 'AI Cont',
        label: 'ai',
      },
    ],
  });
};

export default SocialMediaTrait;
