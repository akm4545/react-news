import React from "react";
import styled from 'styled-components';

//해당 스타일을 가진 컴포넌트 생성
const NewsItemBlock = styled.div`
    display: flex;

    .thumbnail {
        margin-right: 1rem;
        img{
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }

    .contents{
        h2{
            margin: 0;
            a{
                color: black;
            }
        }
        p{
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }

    & + & {
        margin-top: 3rem;
    }
`;

const NewsItem = (({article}) => {
    const {title, description, url, urlToImage} = article;

    return (
        <NewsItemBlock>
            {/* urlToImage의 값의 존재 여부에 따라 렌더링 */}
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
});

export default NewsItem;