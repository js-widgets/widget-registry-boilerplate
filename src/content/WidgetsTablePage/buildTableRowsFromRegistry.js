import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Information16 } from '@carbon/icons-react';

export default function (widgetTypes) {
  return widgetTypes.map((item) => {
    return {
      id: item['shortcode'],
      name: item['title'],
      description: item['description'],
      version: item['version'],
      status: item['status'] ?? '',
      createdAt: item['createdAt'] ? new Date(item['createdAt']).toDateString() : null,
      updatedAt: item['updatedAt'] ? new Date(item['updatedAt']).toDateString() : null,
      owner: item['owner'],
      translations: item['availableTranslations'] || null,
      websegments: item['webSegmentPaths'] || null,
      links: [
        {
          text: 'Demo',
          id: `https://pages.${item['repositoryUrl'].substr(8)}`,
        },
        {
          text: 'Repository',
          id: item['repositoryUrl'],
        },
      ],
      details: (
        <RouterLink to={`/widget-type/${item['shortcode']}`}>
          <Information16 />
        </RouterLink>
      ),
    };
  });
}
