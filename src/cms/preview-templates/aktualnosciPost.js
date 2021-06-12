
import React from 'react'
import PropTypes from 'prop-types'
import BlogPostTemplate from '../../templates/post';

const AktualnosciPostPreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags'])
    return (
        <BlogPostTemplate
            content={widgetFor('body')}
            description={entry.getIn(['data', 'description'])}
            tags={tags && tags.toJS()}
            title={entry.getIn(['data', 'title'])}
        />
    )
}

AktualnosciPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default AktualnosciPostPreview