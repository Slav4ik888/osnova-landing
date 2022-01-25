import { sortingArr } from '../sorting/sorting-arr.js';
import { createElement, createResultStrip, getNode } from './index.js';
import { filterResult } from '../process/filter-result.js';
import { store } from '../store/index.js';

export const onShow = () => {

  const $root  = getNode(`.root`);
  $root.textContent = ``;
  
  const $table = createElement(`table`, `results`);

  const $tbody = createElement(`tbody`);
  
  $table.insertAdjacentElement(`afterbegin`, $tbody);
    
  const results = store.getState().results;
  const edit    = store.getState().edit;

  const filtredResult = edit ? [...results] : filterResult(results);
  const sortedResults = edit ? sortingArr(results, `date`, true) : [...filtredResult];
  console.log('LENGHT: ', sortedResults.length);

  sortedResults.forEach(r => {
    $tbody.insertAdjacentElement('beforeend', createResultStrip(r, edit));
  });

  $root.insertAdjacentElement('beforeend', $table);
}