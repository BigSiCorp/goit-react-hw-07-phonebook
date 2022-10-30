import { useDispatch, useSelector } from 'react-redux';
import {deleteContact} from 'redux/contactsOperations';
import { selectIsLoading, selectError,selectRenderContacts  } from 'redux/contactsSelector';

import { RotatingLines } from  'react-loader-spinner'
import s from './PhoneList.module.css';

export const ContactList = () => {
   const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const renderContacts= useSelector(selectRenderContacts);
  
  return (
    <>
    {isLoading && <div className={s.loader}><RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/></div> }
      {error && (
        <p>
          Sorry!The action was not completed, try again later.
        </p>
      )}
      <ul className={s.phoneList}>
        {!renderContacts.length && <p>There are no contacts found!</p>}
        {renderContacts.length > 0 &&
          renderContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={s.phoneItem}>
                <span className={s.phoneName}>{name} :</span>
                {number}
                <button
                  className={s.btnDelete}
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

