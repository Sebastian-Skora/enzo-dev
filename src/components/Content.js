
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { connect } from 'react-redux'


const Content = ({ content, className }) => (
    <div className={className}>{content}</div>
)

export const HTMLContent = connect(
    state => ({
        modeRedux: state.toggleMode,
    })
)(({ content, className, modeRedux }) => (
    <ArticleBody darkMode={modeRedux} className={className} dangerouslySetInnerHTML={{ __html: content }} />
))


Content.propTypes = {
    content: PropTypes.node,
    className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes



const ArticleBody = styled.div`
p,h1,h2,h3,h4,h5,h6,ul li, ol li {
    color: ${props => props.darkMode ? "#dfdfdf" : "#3d3f4c"};
}
p {
    @media(min-width: 641px) {
    font-size:20px;
    
    }
}
h2 {
    font-size: 29px;
    @media (min-width: 641px) {
        font-size: 36px;
    }
    font-weight: 900;
}
`

export default Content