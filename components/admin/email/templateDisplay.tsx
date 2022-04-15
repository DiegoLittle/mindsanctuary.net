import React from 'react'
// import {PersonalWelcomeHTML} from '../../../../lib/email/personalWelcome'

const Email= ({ name,email,selected }) => {
    function PersonalWelcomeHTML(name,email){
        return(
            `<!DOCTYPE html>
            <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
            <head>
              <meta charset="utf-8">
              <meta name="x-apple-disable-message-reformatting">
              <meta http-equiv="x-ua-compatible" content="ie=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
              <!--[if mso]>
              <noscript>
                <xml>
                  <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                  </o:OfficeDocumentSettings>
                </xml>
              </noscript>
              <style>
                td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
              </style>
              <![endif]-->
              
                <title>Welcome to Mind Sanctuary</title>
              
                <style>
            .hover\:bg-indigo-700:hover {
              background-color: #4338ca !important;
            }
            .hover\:bg-blue-600:hover {
              background-color: #2563eb !important;
            }
            .hover\:text-blue-400:hover {
              color: #60a5fa !important;
            }
            .hover\:underline:hover {
              text-decoration: underline !important;
            }
            .hover\:no-underline:hover {
              text-decoration: none !important;
            }
            @media (max-width: 600px) {
              .sm\:inline-block {
                display: inline-block !important;
              }
            
              .sm\:h-32 {
                height: 32px !important;
              }
            
              .sm\:w-full {
                width: 100% !important;
              }
            
              .sm\:w-16 {
                width: 16px !important;
              }
            
              .sm\:px-16 {
                padding-left: 16px !important;
                padding-right: 16px !important;
              }
            
              .sm\:py-32 {
                padding-top: 32px !important;
                padding-bottom: 32px !important;
              }
            
              .sm\:px-24 {
                padding-left: 24px !important;
                padding-right: 24px !important;
              }
            
              .sm\:px-0 {
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
            
              .sm\:pb-32 {
                padding-bottom: 32px !important;
              }
            
              .sm\:leading-40 {
                line-height: 40px !important;
              }
            
              .sm\:leading-32 {
                line-height: 32px !important;
              }
            }
            </style>
              
            </head>
            <body class="bg-gray-100" style="margin: 0; width: 100%; padding: 0; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #f3f4f6;">
              <div role="article" aria-roledescription="email" aria-label="Welcome to Mind Sanctuary" lang="en">
                
                <table class="w-full font-sans" style="width: 100%; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="center" class="bg-gray-100 sm:px-16" style="background-color: #f3f4f6;">
                      <table class="w-600 sm:w-full bg-white" style="width: 600px; background-color: #ffffff;" cellpadding="0" cellspacing="0" role="presentation">
                        <!-- <tr>
                          <td class="p-48 sm:py-32 sm:px-24 text-center">
                            <a href="https://maizzle.com">
                              <img src="images/maizzle.png" width="75" alt="Maizzle">
                            </a>
                          </td>
                        </tr> -->
                        <tr>
                          <td class="bg-top bg-no-repeat bg-cover rounded text-left" style="background-image: url('undefined'); border-radius: 4px; background-size: cover; background-position: top; background-repeat: no-repeat; text-align: left;">
                            <div>
                              <div class="leading-64 sm:h-32" style="line-height: 64px;">&zwnj;</div>
                              <table class="w-full" style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                  <td class="w-48 sm:w-16" style="width: 48px;"></td>
                                  <td>
                                    <div class="text-lg mx-auto" style="margin-left: auto; margin-right: auto; font-size: 18px;">
                                        <div>
                                            Hi ${name},
                                            <p>
                                              I’m Diego, the founder of <a href="https://mindsanctuary.net" target="_blank">Mind Sanctuary</a>, and I’d like to personally thank you for signing up to our product.
                                              </p>
                                              <p>
                                              Often people are struggling with their mental health and either don't have access to a therapist or need something immediate that a scheduled appointment can't provide. Thats why we established Mind Sanctuary, in order to create an instant and accesible source of comfort and healing for those struggling with their mental health.
                                              I’d love for you to share it with your friends and hear what you think of Mind Sanctuary. Is there anything we should work on or improve? Let us know!
                                              </p>
                                              <p>
                                              I’m always happy to help and read our users’ suggestions.
                                              </p>
                        
                                            Diego at Mind Sanctuary
                                        </div>
                                    </div>
                                  </td>
                                  <td class="w-48 sm:w-16" style="width: 48px;"></td>
                                </tr>
                              </table>
                              <div class="leading-64 sm:h-32" style="line-height: 64px;">&zwnj;</div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="h-32" style="height: 32px;"></td>
                        </tr>
                        <tr>
                          <td class="w-full px-24 sm:px-0 text-left" style="width: 100%; padding-left: 24px; padding-right: 24px; text-align: left;">
                            <table class="w-full" style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                                <td class="w-full pb-32 sm:w-full sm:inline-block" style="width: 100%; padding-bottom: 32px;">
                                    <h1 class="text-center" style="text-align: center;">From the blog</h1>
                                  <table class="w-full" style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                      <td class="p-24 bg-white rounded shadow" style="border-radius: 4px; background-color: #ffffff; padding: 24px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);">
                                        <p class="m-0 mb-4 text-sm text-gray-500" style="margin-bottom: 4px; font-size: 14px; color: #6b7280;">7 March, 2022</p>
                                        <h2 class="m-0 mb-24 text-2xl leading-24" style="margin-bottom: 24px; font-size: 24px; line-height: 24px;">Cognitive Behavioral Therapy</h2>
                                        <p class="m-0 mb-24 text-base text-gray-800" style="margin-bottom: 24px; font-size: 16px; color: #1f2937;">Cognitive Behavioral Therapy (CBT) is a type of psychological therapy aimed to improve the symptoms of various mental health conditions such as Anxiety and Depression.</p>
                                        <a href="https://mindsanctuary.net/blog/cogntive-behavioral-therapy" class="text-base text-blue-500 hover:text-blue-400 no-underline" style="font-size: 16px; color: #3b82f6; text-decoration: none;">Read more &rarr;</a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                        </tr>
                        <!-- <tr>
                          <td class="h-64 sm:h-32"></td>
                        </tr> -->
                        <tr>
                        </tr>
                        <!-- <tr>
                          <td class="h-64 sm:h-32"></td>
                        </tr> -->
                        <tr>
                          <td class="px-48 sm:px-24 py-16 bg-cool-gray-300 rounded text-left" style="border-radius: 4px; padding-left: 48px; padding-right: 48px; padding-top: 16px; padding-bottom: 16px; text-align: left;">
                            <p class="m-0 text-sm text-cool-gray-500" style="font-size: 14px;">
                              You are receiving this email because you signed up for Mind Sanctuary.
                              You can <a href="https://mindsanctuary.net/api/email/unsubscribe?email=${email}" class="text-blue-500 hover:text-blue-400 no-underline" style="color: #3b82f6; text-decoration: none;">unsubscribe</a> at any time.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td class="h-48 sm:h-32" style="height: 48px;"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                
              
              </div>
            </body>
            </html>
            
            `        
        )
    }
    function getTemplateHTML(selected){
      if(selected.name=='Personal Welcome'){
        return PersonalWelcomeHTML(name,email)
      }
    }
        return (
            <div className='prose mx-auto' dangerouslySetInnerHTML={{ __html: getTemplateHTML(selected) }}>
            </div>
        )
    }

export default Email
