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
