import { get } from "axios";

export function getMenuList(id) {
  return get(
    "https://www.fastmock.site/mock/43500c531963a5a5fda54cdac12c982e/xianju/getMenu"
  ).then((res) => {
    return res.data.data;
  });
}
