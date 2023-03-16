document.write("1. Using many array in one array changed in map method.");
document.write("<br>");
document.write("<br>");

const users = [
    {
      first_name: 'Mike',
      last_name: 'Sheridan'
    },
    {
      first_name: 'Tim',
      last_name: 'Lee'
    },
    {
      first_name: 'John',
      last_name: 'Carte'
    }
  ];
  const fullNames = users.map(word => `'${word.first_name} ${word.last_name}'`);
  document.write(fullNames);