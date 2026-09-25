import type { DownloadFormatsContent } from '../download-formats-types';

export const arFormats: DownloadFormatsContent = {
  tagline: 'صيغ التنزيل',
  title: 'أي ملف تنزّله؟',
  subtitle: 'هو Shotera نفسه في الصيغ الأربع، والفرق فقط في طريقة التثبيت والتحديث.',
  headers: ['الصيغة', 'التثبيت والتحديث', 'الأنسب لـ'],
  recommendLabel: 'موصى به',
  rows: [
    { format: 'مثبّت (.exe)', install: 'تثبيت عبر معالج؛ تحديث تلقائي داخل التطبيق', bestFor: 'معظم المستخدمين' },
    { format: 'النسخة المحمولة (.7z)', install: 'فك الضغط والتشغيل؛ تحديث تلقائي داخل التطبيق', bestFor: 'اصطحابها على ذاكرة محمولة' },
    { format: 'مثبّت MSI (.msi)', install: 'نقرة مزدوجة أو تثبيت صامت؛ تحديث تلقائي داخل التطبيق', bestFor: 'النشر الجماعي في الشركات' },
    { format: 'Microsoft Store', install: 'التثبيت والتحديث من المتجر', bestFor: 'من يفضّل أن يدير النظام كل شيء' },
  ],
};
