import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../chunks/index.js";
import { n as navigating } from "../../chunks/stores.js";
const app = "";
const Progress_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-1ou9uxf li.svelte-1ou9uxf{width:3px;height:15px;background:rgb(76 29 149);margin:0 2px;animation:svelte-1ou9uxf-animate 0.7s infinite alternate}ul.svelte-1ou9uxf li.svelte-1ou9uxf:nth-child(1){animation-delay:0.1s}ul.svelte-1ou9uxf li.svelte-1ou9uxf:nth-child(2){animation-delay:0.2s}ul.svelte-1ou9uxf li.svelte-1ou9uxf:nth-child(3){animation-delay:0.3s}ul.svelte-1ou9uxf li.svelte-1ou9uxf:nth-child(4){animation-delay:0.4s}ul.svelte-1ou9uxf li.svelte-1ou9uxf:nth-child(5){animation-delay:0.5s}ul.svelte-1ou9uxf li.svelte-1ou9uxf:nth-child(6){animation-delay:0.6s}@keyframes svelte-1ou9uxf-animate{0%{transform:scaleY(1)}25%{transform:scaleY(1)}50%{transform:scaleY(1)}75%{transform:scaleY(1)}100%{transform:scaleY(3)}}",
  map: null
};
const Progress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let level = 0;
  $$result.css.add(css);
  $$unsubscribe_navigating();
  return `${$navigating ? `<div class="${"transition-all ease-in h-1 fixed top-0 left-0 bg-red-700 overflow-hidden"}" style="${"width: " + escape(level, true) + "%;"}"></div>
    <ul class="${"fixed top-5 right-3 flex opacity-30 svelte-1ou9uxf"}"><li class="${"svelte-1ou9uxf"}"></li>
        <li class="${"svelte-1ou9uxf"}"></li>
        <li class="${"svelte-1ou9uxf"}"></li>
        <li class="${"svelte-1ou9uxf"}"></li>
        <li class="${"svelte-1ou9uxf"}"></li>
        <li class="${"svelte-1ou9uxf"}"></li></ul>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Progress, "Progress").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
