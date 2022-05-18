import { useState, useEffect, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const useParallax = (ref, refContainer, percentage, direction = -1) => {
  useEffect(()=>{
    if(ref && ref.current && refContainer && refContainer.current){
        const section = refContainer.current;
        const div = ref.current;

        // Set up relative position
        div.style.position = "absolute";

        // Add smooth transition
        div.style.transition += "top .3s cubic-bezier(0, .05, .15, 1)";

        // Use initial top as reference
        let initialTop = window.getComputedStyle(div).getPropertyValue('top');
        initialTop = (initialTop !== "auto") ? initialTop.replace("px", "") : "0";
        initialTop = parseFloat(initialTop);


        const handleScroll = () => {
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            if(!(section.getBoundingClientRect().bottom < 0 || section.getBoundingClientRect().top - viewHeight >= 0)) {

              if(ref.current) {
                const value = window.pageYOffset - section.offsetTop;
                div.style.top = initialTop + (value * percentage) * direction + 'px';
              }

            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [ref, refContainer, percentage, direction]);
}


export const useScrollToListener = (scroller, containerRef, options) => {
  const params = useParams();
  const height = containerRef?.current?.offsetHeight
  const scroll = scroller.scroller;


  const handleScrollTo = useCallback(() => {
    const { section } = params;
    const { defaultOptions } = options;
    const custom = (options.customOptions) ? options.customOptions[section] : {};
    const configOptions = {...defaultOptions, ...custom};

    if(section) {
      if(configOptions.dontScrollIfShown) {
        const div = containerRef.current.querySelector(`div[name=${section}]`).getBoundingClientRect();
        if(div.top > 0 || div.bottom < 0)
           scroll.scrollTo(section, configOptions);
      }
      else
        scroll.scrollTo(section, configOptions);
    }
  }, [params, options, containerRef, scroll]);


  useEffect(() => {
    handleScrollTo();
  }, [params, handleScrollTo]);

  useEffect(() => {
    setTimeout(handleScrollTo, 1);
  }, [height, handleScrollTo])
}


export const useSearchParamListener = ({searchParam, defaultParam}) => {
  const location = useLocation();
  const [param, setParam] = useState(null);

  useEffect(() => {
    const { search } = location;
    const regexp = new RegExp(`[?&]${searchParam}=([A-Za-z0-9]*)`);
    const matches = search.match(regexp);

    const selectedParam = (matches) ? matches[1] : defaultParam;
    setParam(selectedParam);
  }, [location, searchParam, defaultParam,])

  return param;
}
