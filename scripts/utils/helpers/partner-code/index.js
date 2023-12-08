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
 */
const setPartnerCodeToHrefs = () => {
  const
    search = window.location.search,
    partnerCode = getPartnerCode(search);

  // Если адресная строка содержит код партнёра
  if (! partnerCode) return
  
  // Во все ссылки на курс, добавить его
  const allA = document.querySelectorAll('a');
  allA.forEach(it => {
    if (it.hostname === 'course.thm.su') {
      it.href = `http://course.thm.su/ref?p=${partnerCode}`;
    }
  });
}

setPartnerCodeToHrefs();
