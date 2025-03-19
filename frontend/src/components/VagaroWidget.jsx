import React, { useEffect, useRef } from 'react';

const VagaroWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current) {
      // Insert the HTML content (without the script tag)
      widgetRef.current.innerHTML = `
        <div id='frameTitle' class='embedded-widget-title' style='font-size: 23px; color: #333; font-family: Arial, Helvetica, sans-serif; line-height:24px; padding: 18px 10px 8px; text-align: center; box-sizing: border-box;'></div>
        <div class="vagaro" style="width:250px; padding:0; border:0; margin:0 auto; text-align:center;">
          <style>
            .vagaro a { font-size:14px; color:#AAA; text-decoration:none; }
          </style>
          <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;
          <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,&nbsp;
          <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;
          <a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a>
        </div>
      `;
      // Create and append the external script tag
      const script = document.createElement('script');
      script.src = "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqpDZWqCp8cT3qnV3avV34mC2PeFJ4mC30m9dSycvCu7gevEhAJDXwPapcUbfY?v=mQ5gZGQ1ZRUZiumTJyoBLzQseFGSjGpUkRlv3dyXzHDG#";
      script.async = true;
      widgetRef.current.appendChild(script);
    }
  }, []);

  return <div ref={widgetRef} />;
};

export default VagaroWidget;