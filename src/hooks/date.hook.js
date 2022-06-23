import React from "react";

const useDate = (createdAt) => {
  const data = new Date(Date.parse(createdAt));
  let day = data.getDate();
  let m = new Array(12);
  m[0] = "Января";
  m[1] = "Февраля";
  m[2] = "Марта";
  m[3] = "Апреля";
  m[4] = "Мая";
  m[5] = "Июня";
  m[6] = "Июля";
  m[7] = "Августа";
  m[8] = "Сентября";
  m[9] = "Октября";
  m[10] = "Ноября";
  m[11] = "Декабря";
  let month = m[data.getMonth()];
  let year = data.getFullYear();

  return { day, month, year };
};

export default useDate;
