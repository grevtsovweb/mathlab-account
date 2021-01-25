const smartgrid = require('smart-grid');

const settings = {
	outputStyle: 'sass',
    columns: 12,
    offset: '20px',
    mobileFirst: true,
    container: {
        maxWidth: '1215px',
        fields: '15px'
    },
    breakPoints: {
    	md: {
            width: '992px',
            fields: '15px'
        },
        sm: {
            width: '760px',
            fields: '15px'
        },
        xs: {
            width: '576px',
            fields: '15px'
        },
        xxs: {
            width: '386px',
            fields: '15px'
        }
    },
    oldSizeStyle: false
};

smartgrid('./src/styles', settings);