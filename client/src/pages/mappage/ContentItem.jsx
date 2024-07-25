import React, { Component } from 'react'

function ContentItem({iconComponent,ruleName,ruleContent}){
    return(
        <div className='contentItem'>
            {iconComponent}
            <p>{ruleName}</p>
            <p>{ruleContent}</p>
        </div>
    )
}

export default ContentItem;