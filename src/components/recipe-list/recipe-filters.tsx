// import { FC, useMemo, useState } from "react";
// import {
//   CUISINE_FILTERS_TYPE,
//   DIET_FILTERS_TYPE,
//   INTOLERANCES_FILTERS_TYPE,
//   SearchFilters,
// } from "./types";
// import {
//   CUISINE_FILTERS,
//   DIET_FILTERS,
//   INTOLERANCES_FILTERS,
// } from "./filter-helpers";

// interface SearchFiltersProps {
//   handleApply: (filters: SearchFilters) => void;
// }
export {}
// const filterEntities = ["cuisine", "diet", "intolerances"];

// export const RecipeFilters: FC<SearchFiltersProps> = ({ handleApply }) => {
//   const [tmpFilters, setTmpFilters] =
//     useState<SearchFilters>(initialFilterState);

//   const filtersByEntity: {
//     cuisine: CUISINE_FILTERS_TYPE;
//     diet: DIET_FILTERS_TYPE;
//     intolerances: INTOLERANCES_FILTERS_TYPE;
//   } = useMemo(() => {
//     return {
//       cuisine: CUISINE_FILTERS,
//       diet: DIET_FILTERS,
//       intolerances: INTOLERANCES_FILTERS,
//     };
//   }, []);

//   const handleClear = () => {
//     setTmpFilters(initialFilterState);
//   };

//   return (
//     <div className="border-2 bg-gray-200 rounded-md flex flex-col items-center">
//       <h3>Filter your results</h3>
//       <div className="flex-col gap-y-4">
//         {filterEntities.map((entity) => {
//           return (
//             <div className="w-auto">
//               <label className="font-bold">{entity.toUpperCase()}</label>
//               <div className="bg-white rounded-lg shadow dark:bg-gray-700">
//                 <ul className="grid grid-cols-3">
//                   {Object.keys(
//                     filtersByEntity[entity as keyof typeof filtersByEntity]
//                   ).map((filter, idx) => {
//                     const isChecked = !!tmpFilters[
//                       entity as keyof SearchFilters
//                     ].includes(
//                       filtersByEntity[entity as keyof typeof filtersByEntity][
//                         filter as keyof (CUISINE_FILTERS_TYPE | DIET_FILTERS_TYPE | INTOLERANCES_FILTERS_TYPE)
//                       ]
//                     ); 

//                     return (
//                       <li key={idx} className="w-full rounded-t-lg">
//                         <div className="flex items-center ps-3">
//                           <input
//                             type="checkbox"
//                             checked={isChecked}
//                             value={
//                               filtersByEntity[
//                                 entity as keyof typeof filtersByEntity
//                               ][filter as keyof (CUISINE_FILTERS_TYPE | DIET_FILTERS_TYPE | INTOLERANCES_FILTERS_TYPE)]
//                             }
//                             onChange={() => {
//                               if (!isChecked) {
//                                 setTmpFilters({
//                                   ...tmpFilters,
//                                   [entity]: [
//                                     ...tmpFilters[
//                                       entity as keyof SearchFilters
//                                     ],
//                                     filtersByEntity[
//                                       entity as keyof typeof filtersByEntity
//                                     ][filter as keyof (CUISINE_FILTERS_TYPE | DIET_FILTERS_TYPE | INTOLERANCES_FILTERS_TYPE)],
//                                   ],
//                                 });
//                               } else {
//                                 setTmpFilters({
//                                   ...tmpFilters,
//                                   [entity]: tmpFilters[
//                                     entity as keyof SearchFilters
//                                   ].filter(
//                                     (value) =>
//                                       value !== filtersByEntity[entity as keyof typeof filtersByEntity][filter as keyof (CUISINE_FILTERS_TYPE | DIET_FILTERS_TYPE | INTOLERANCES_FILTERS_TYPE)]
//                                   ),
//                                 });
//                               }
//                             }}
//                             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                           />
//                           <label className="w-full py-3 ms-2 text-sm font-medium dark:text-gray-300">
//                             {filter}
//                           </label>
//                         </div>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="w-3/4 flex flex-wrap justify-between">
//         <button onClick={handleClear}>Clear</button>
//         <button onClick={() => handleApply(tmpFilters)}>Apply</button>
//       </div>
//     </div>
//   );
// };
