// הכתובת הזו כבר לא בשימוש: מסירים את עצמנו
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.registration.unregister()));
