export default function(server) {
  server.create('card', {
    title: 'Hello Caterpillar',
    list: 'Coding'
  });

  server.create('card', {
    title: 'Welcome',
    list: 'Coding'
  });

  server.create('card', {
    title: 'Check out JS Conf',
    list: 'Web'
  });
}
