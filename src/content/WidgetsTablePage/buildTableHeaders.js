export default function () {
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
      key: 'links',
      header: 'Links',
      isSortable: false,
    },
    {
      key: 'details',
      header: '',
      isSortable: false,
    },
  ];
}
