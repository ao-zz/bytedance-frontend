// index.js

const vdom = {
    type: 'ul',
    props: {
        className: 'list'
    },
    children: [
        {
            type: 'li',
            props: {
                className: 'item',
                style: {
                    color: '#f00'
                },
                onClick: function() {
                    alert('text a');
                }
            },
            children: [
                'text a'
            ]
        },
        {
            type: 'li',
            props: {
                className: 'item',
                style: {
                    color: '#0f0'
                },
                onClick: function() {
                    alert('text b');
                }
            },
            children: [
                'text b'
            ]
        },
        {
            type: 'li',
            props: {
                className: 'item',
                style: {
                    color: '#00f'
                },
                onClick: function() {
                    alert('text c');
                }
            },
            children: [
                'text c'
            ]
        }
    ]
};

render(vdom, document.getElementById('root'));
