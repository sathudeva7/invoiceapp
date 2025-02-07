export enum BlockCategory {
  WidgetBlock = 'Elements',
}

export const WIDGET_BLOCK = [
  {
    id: 'Text',
    label: 'Text',
    media: `https://editor.mailstyler.com/static/assets//img/elements/emc_text.svg`,
    activate: true,
    content: `<style data-type="emptyRow">
		[data-gjs-type="addSection"]:empty {
               text-decoration: none;
               padding: 5px;
               outline: 1px dashed #d3d3d3;
          }

          [data-gjs-type="emptyRow"]:empty:before {
               background-color: #ddd;
               color: #000;
               font-size: 16px;
               font-weight: bold;
               font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
               height: 100%;
               display: flex;
               align-items: center;
               justify-content: center;
               min-height: 30px;
               padding: 0 10px;
               opacity: 0.3;
               outline: 1px dashed #d3d3d3;
               border-radius: 3px;
               white-space: nowrap;
               overflow: hidden;
               text-overflow: ellipsis;
               content: "DRAG ELEMENTS HERE";
          }
		</style><div id="block" style="position: relative; min-height: 20vh;">
      <table style="width:100%;margin:0 auto 0 auto; min-height: 20vh;" cellspacing="0" cellpadding="0" width="100%" align="center" border="0">
        <tbody>
          <tr>
            <th style="padding-top: 0px;padding-right:0;padding-bottom:0;padding-left:0;">
              <table style="width:600px;margin:0 auto; min-height: 20vh;" cellspacing="0" cellpadding="0" width="600" align="center" border="0">
                <tbody>
                  <tr>
                    <th style="width:600px;text-align:center;" width="600" align="center">
                      <table style="width:100%; min-height: 20vh;" cellspacing="0" cellpadding="0" align="center"  width="100%">
                        <tbody>
                          <tr>
                            <th style="width: 600px; word-break: break-word; background-color: rgb(255, 255, 255); vertical-align: top; text-align: left; font-weight: normal; padding: 0px;" bgcolor="#ffffff" width="600" valign="top" align="left"  ><div data-gjs-type="emptyRow" style="display: flex; flex-direction: column; flex-basis: 100%; padding: 10px; justify-content: center; align-items: center; min-height: 20vh;"></div></th></tr></tbody></table>
                    </th>
                  </tr>
                </tbody>
              </table>
            </th>
          </tr>
        </tbody>
      </table>
    </div>`,
  },
  {
    id: 'Title',
    label: 'Title',
    media: `https://editor.mailstyler.com/static/assets//img/elements/emc_title.svg`,
    activate: true,
    content: `<h1 class="heading">Insert title here</h1>`,
  },
  {
    id: 'Link',
    label: 'Link',
    media: `https://editor.mailstyler.com/static/assets//img/elements/emc_canspam.svg`,
    activate: true,
    content: `<a href="#" class="text-blue-500 hover:text-blue-700 underline">Double click to change Link text and URL</a>`,
  },
  {
    id: 'Social Media',
    label: 'Social Media',
    media: `https://editor.mailstyler.com/static/assets//img/elements/emc_social.png`,
    content: `<div id="social-container" class="container max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
  <h1 class="text-2xl font-bold mb-4">Follow Us</h1>
  <div id="social-media" class="social-media flex justify-center space-x-4 mt-4">
  
  <a id="Facebook" href="https://facebook.com" class="text-gray-500 hover:text-blue-500">
     <img style="display:block;border:0;height:32px;outline:none;text-decoration:none;width:32px;" alt="" src="https://mailchef.s3.amazonaws.com/uploads/development/785463/image/D69054AE-D0E2-A193-2D42-DA40921490E5_1550738495_facebook.png" height="32" width="32" />
  </a>
  <a id="X" href="https://twitter.com" class="text-gray-500 hover:text-blue-400">
    <img style="display:block;border:0;height:32px;outline:none;text-decoration:none;width:32px;" alt="" src="https://mailchef.s3.amazonaws.com/uploads/development/785463/image/3752D04D-42ED-401F-39D0-30EFE18FBDC1_1550738573_twitter.png height="32" width="32" />
  </a>
  <a id="Linkedin" href="https://linkedin.com" class="text-gray-500 hover:text-blue-700">
    <img style="display:block;border:0;height:32px;outline:none;text-decoration:none;width:32px;" alt="" src="https://mailchef.s3.amazonaws.com/uploads/development/785463/image/13436FCA-4C90-0586-7C56-8260A0BA034B_1550738594_linkedin.png" height="32" width="32" />
  </a>
  <a id="Instagram" href="https://instagram.com" class="text-gray-500 hover:text-pink-500">
    <img style="display:block;border:0;height:32px;outline:none;text-decoration:none;width:32px;" alt="" src="https://mailchef.s3.amazonaws.com/uploads/development/785463/image/92184B61-C325-FFAC-E092-2D9EAA16C22E_1550738861_instagram.png height="32" width="32" />
  </a>
  <a id="Youtube" href="https://instagram.com" class="text-gray-500 hover:text-pink-500">
    <img style="display:block;border:0;height:32px;outline:none;text-decoration:none;width:32px;" alt="" src="https://mailchef.s3.amazonaws.com/uploads/development/785463/image/5260656E-72C8-349E-B195-9E794C8FB0A0_1550738551_youtube.png" height="32" width="32" />
  </a>
  <a id="Website" href="https://instagram.com" class="text-gray-500 hover:text-pink-500">
    <img style="display:block;border:0;height:32px;outline:none;text-decoration:none;width:32px;" alt="" src="https://mailchef.s3.amazonaws.com/uploads/development/785463/image/18BFAE5B-DE53-30CC-57F5-2AFDC461BF97_1550738839_global.png" height="32" width="32" />
  </a>
   
  </div>
</div>`,
  },
];
