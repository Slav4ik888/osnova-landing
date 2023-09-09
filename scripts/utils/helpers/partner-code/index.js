import { getPartnerCode } from './get-partner-code/index.js';
import { setPartnerCodeLS } from '../local-storage/index.js';

// SCHEMA
// 
// https://job-descriptions-course.netlify.app/?p=${partnerId}
// https://job-descriptions-course.netlify.app/?p=azbuka
// 
// www.course.thm.su/ref?p=${partnerId}
// www.course.thm.su/ref?p=azbuka
// 



/**
 * Во все ссылки на сайте добавить код партнёра (если есть)
 * И сохранить код партнёра в LS
 */
const setPartnerCodeToHrefs = () => {
  const partnerCode = getPartnerCode();

  // Если адресная строка содержит код партнёра
  if (! partnerCode) return
  
  // Сохранить в LS
  setPartnerCodeLS(partnerCode);

  // Во все ссылки на курс, добавить его
  const allA = document.querySelectorAll('a');
  allA.forEach(it => {
    if (it.hostname === 'course.thm.su') {
      it.href += `/ref?p=${partnerCode}`;
      console.log(it.href);
    }
  });
}

setPartnerCodeToHrefs();
