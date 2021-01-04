import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Information16 } from '@carbon/icons-react';
import { CodeSnippet, Dropdown, ListItem, UnorderedList } from 'carbon-components-react';

export default function (widgetTypes) {
  return widgetTypes.map((item) => {
    return {
      id: item['shortcode'],
      name: item['title'],
      description: item['description'],
      version: item['version'],
      status: (
        <CodeSnippet type="inline" className={`status--${item['status']}`}>
          {item['status']}
        </CodeSnippet>
      ),
      createdAt: new Date(item['createdAt']).toDateString(),
      updatedAt: new Date(item['updatedAt']).toDateString(),
      translations: (
        <UnorderedList className="bx--list__langcodes">
          {item['availableTranslations'].map((langcode) => (
            <ListItem key={`item-${langcode}`}>
              <CodeSnippet type="inline">{langcode}</CodeSnippet>
            </ListItem>
          ))}
        </UnorderedList>
      ),
      links: (
        <Dropdown
          id="default"
          label="- Please select -"
          items={[
            {
              text: 'Demo',
              id: `https://pages.${item['repositoryUrl'].substr(8)}`,
            },
            {
              text: 'Repository',
              id: item['repositoryUrl'],
            },
          ]}
          itemToString={(item) => (item ? item.text : '')}
          onChange={({ selectedItem: { id: url } }) => {
            window.location.href = url;
          }}
        />
      ),
      details: (
        <RouterLink to={`/widget-type/${item['shortcode']}`}>
          <Information16 />
        </RouterLink>
      ),
    };
  });
}
