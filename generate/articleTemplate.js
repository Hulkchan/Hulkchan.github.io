// template.js
module.exports = {
  articleTemplate: (title, date, dataCategories) => {
    return `---
title: '${title}'
author: chenqi
date: ${date}
dataCategories:
  - ${dataCategories}
---
    `;
  }
};
