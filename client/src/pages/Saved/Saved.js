import React from 'react';
import Section from '../../components/Section';
import { ArticleList, SavedListItem } from '../../components/Article';

const Saved = () => (
    <Section>
        <ArticleList>
            <SavedListItem />
        </ArticleList>
    </Section>
);

export default Saved;