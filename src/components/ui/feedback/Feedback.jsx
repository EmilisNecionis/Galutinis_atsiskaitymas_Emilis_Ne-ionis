import React, {useEffect} from "react";
import css from './feedback.module.css'
import { useAuthCtx } from '../../../store/AuthProvider';

function Feedback() {
 
  const { feedback } = useAuthCtx();
  const { show, msg } = feedback;



  return show ? (
    <div className={css.feedback}>
      <p className={css.msg}>{msg}</p>
    </div>
  ) : null;
}

export default Feedback;