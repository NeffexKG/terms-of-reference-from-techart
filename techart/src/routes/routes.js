import loadable from "@loadable/component";

const BuildingPage = loadable(() => import('../pages/building-type/building-type'))
const NumberOfFloors = loadable(() => import('../pages/number-floors/number-floors'))
const WallMaterial = loadable(() => import('../pages/wall-material/wall-material'))
const WallLength = loadable(() => import('../pages/wall-length/wall-length'))
const ResultPage = loadable(() => import('../pages/result-page/result-page'))

export const routes = [
	{
		title: "Building",
		exact: true,
		component: BuildingPage,
		path: "/"
	},
	{
		title: "NumberOfFloors",
		exact: true,
		component: NumberOfFloors,
		path: "/number/floors"
	},
	{
		title: "WallMaterial",
		exact: true,
		component: WallMaterial,
		path: "/wall/material/:type?/:numberFloors?/"
	},
	{
		title: "WallLength",
		exact: true,
		component: WallLength,
		path: "/wall/length/:type?/:material"
	},
	{
		title: "ResultPage",
		exact: true,
		component: ResultPage,
		path: "/result/page"
	}
]
