export default function (rows) {
  return [
    {
      key: 'name',
      header: 'Name',
      isSortable: true,
    },
    {
      key: 'version',
      header: 'Version',
      isSortable: true,
    },
    {
      key: 'status',
      header: 'Status',
      isSortable: true,
    },
    {
      key: 'createdAt',
      header: 'Created',
      isSortable: true,
    },
    {
      key: 'updatedAt',
      header: 'Modified',
      isSortable: true,
    },
    {
      key: 'translations',
      header: 'Translations',
      isSortable: false,
    },
    {
      key: 'owner',
      header: 'Owner',
      isSortable: true,
    },
    {
      key: 'websegments',
      header: 'Web Segments',
      isSortable: false,
    },
    {
      key: 'links',
      header: 'Links',
      isSortable: false,
    },
    {
      key: 'details',
      header: '',
      isSortable: false,
    },
  ].filter((headerData) =>
    // Remove the headers that have no data.
    rows.reduce((hasData, row) => hasData || !!row[headerData.key], false),
  );
}
