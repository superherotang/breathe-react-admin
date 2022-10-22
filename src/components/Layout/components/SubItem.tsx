import { FC } from 'react';

interface Iprops {
  isShow: boolean;
  items: string;
}

const SubItem: FC<Iprops> = props => {
  const {isShow,items} =props;
  return (
    <ul className={`${isShow?'inline':'hidden'}`}>
      {/* inline */}
      <li className='my-2 cursor-pointer  bg-yellow-400 py-1 pl-12 text-lg font-normal'>
        aaaaaaaaa
      </li>
      <li className='my-2 cursor-pointer  bg-yellow-400 py-1 pl-12 text-lg font-normal'>
        aaaaaaaaa
      </li>
    </ul>
  );
};

export default SubItem;
