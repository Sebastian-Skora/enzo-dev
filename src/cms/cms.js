import CMS from 'netlify-cms-app'
import React from 'react'
import Article from './preview-templates/Article'
import styling from '../components/App.css'
const ArticlePreview = ({ entry, widgetFor }) => {
    console.log(widgetFor('body'), 'body!!!!');

    return (
        <Article title={entry.getIn(['data', 'title'])} >
            <div>{widgetFor('body')}</div>
        </Article>
    )
}
CMS.registerPreviewStyle(styling);
CMS.registerPreviewTemplate('Aktualnosci', ArticlePreview)
