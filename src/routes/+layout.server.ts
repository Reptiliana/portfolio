export const load = ({url}: any) => {
  const parts = url.pathname.split('/').filter(Boolean).map((value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  });

  const pageTitle = parts.join(' | ');

  const getDescription = (parts: string[]) => {
    if (parts[0] === 'Work' && parts.length > 1) {
      return 'Know more about my responsabilities as a developer in ' + parts[1] + ' -Reptiliana';
    }

    if (parts[0] === 'Work') {
      return 'Know more about my responsabilities as a developer, a list of my projects and the technologies I used. -Reptiliana';
    }

    if (parts[0] === 'Skills') {
      return "Know more about my skills and the technologies I use, as well as the things I'm learning. -Reptiliana";
    }

    return "Reptiliana - Fullstack Developer"
  };

  console.log(parts);
  return {
        pageTitle: pageTitle,
        pageDescription: getDescription(parts)
  };
}
