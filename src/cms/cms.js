import CMS from 'netlify-cms-app'
import React from 'react'
import Article from './preview-templates/Article'
import styling from '../components/App.css'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
const ArticlePreview = ({ entry, widgetFor }) => {
    return (
        <Article title={entry.getIn(['data', 'title'])} >
            <div>{widgetFor('description')}</div>
            <div>{widgetFor('body')}</div>
        </Article>
    )
}

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewStyle(styling);
CMS.registerPreviewTemplate('Aktualnosci', ArticlePreview)
