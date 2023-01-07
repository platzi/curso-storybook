import { createButton } from './button'
import ButtonDocumentation from './button.md'

export default {
  title: 'Design System/Atoms/Button',
  decorators:  [(story) => {
    const decorator = document.createElement('div')
    decorator.style.margin = '24px'
    decorator.appendChild(story())
    return decorator
  }],
  parameters: {
    docs: {
      page: null,
      description: {
        component: ButtonDocumentation
      }
    },
    actions: {
      handles: ['mouseover']
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'blackfriday',
          value: '#000000'
        },
        {
          name: 'default',
          value: '#FFFFFF'
        },
      ]
    }
  },
  argTypes: {
    label: {
      name: 'label',
      control: {
        type: 'text'
      }
    },
    style: {
      name: 'style',
      options: ['filled', 'outlined'],
      control: {
        type: 'radio'
      }
    },
    size: {
      name: 'style',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio'
      }
    },
    onClick: {
      description: 'Event',
      action: 'clicked'
    }
  }
}

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args })
}

export const Default = Template.bind({})
Default.args = {
  label: 'Button'
}