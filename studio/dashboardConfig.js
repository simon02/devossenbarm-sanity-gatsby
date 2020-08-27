export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f47faeee268adf8dd1c61d4',
                  title: 'Sanity Studio',
                  name: 'devossenbarm-sanity-gatsby-studio',
                  apiId: '71a39609-088a-46dc-900a-10f8b1df0278'
                },
                {
                  buildHookId: '5f47faee736337189eebf51d',
                  title: 'Blog Website',
                  name: 'devossenbarm-sanity-gatsby',
                  apiId: 'fc1aeb74-1a14-4e1c-8ed8-d8953482da5c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simon02/devossenbarm-sanity-gatsby',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://devossenbarm-sanity-gatsby.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
