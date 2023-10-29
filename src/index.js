module.exports = function reverse (n) {
  str = String(Math.abs(n));
      m = str.length-1;
      strNew = '';
       for (i=0; i < str.length; i++){
        strNew = strNew + str[m];
        m = m - 1;
      }
      num = Number(strNew);
      return num;
}
