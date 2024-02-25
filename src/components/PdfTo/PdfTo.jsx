import { ButtonCircle } from 'components/ButtonCircle';
import { Section } from './PdfTo.styled';
import { useState } from 'react';

const list = ['JPEG', 'ECXEL', 'WORD', 'HTML', 'POWER POINT'];

export const PdfTo = ({ setFormatFileDownload }) => {
  const [checked, setChecked] = useState('');
  const [newList, setNewList] = useState(list);

  const hanldeClick = name => {
    setTimeout(() => {
      const filterList = list.filter(itm => itm !== name);
      filterList.splice(2, 0, name);
      setNewList(filterList);
    }, 1000);

    setFormatFileDownload(name);
    setChecked(name);
  };

  return (
    <Section>
      {/* <ul> */}
      {newList.map((itm, i) => (
        // <li key={i}>
        <ButtonCircle
          key={i}
          name={itm}
          hanldeClick={hanldeClick}
          checked={checked}
        />
        // </li>
      ))}
      {/* </ul> */}
    </Section>
  );
};
