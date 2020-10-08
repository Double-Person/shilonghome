import { getAction,deleteAction,putAction,postAction, upLoadFile} from '@/api/manage'
// 首页轮播 
export const homeIndex = (params)=>getAction("/api/index/index",params);
// 服务项目  ------------
export const homeService = (params)=>getAction("/api/index/home_service",params);
// 优质服务
export const homeCategory = (params)=>getAction("/api/index/home_category",params);

// 优质案例
export const homeCase = (params)=>getAction("/api/index/home_case",params);
//新闻
export const homeNews = (params)=>getAction("/api/index/home_news",params);
//新闻详情
export const homeNewsDetail = (params)=>getAction("/api/index/news_detail",params);





// 视频 
export const homeVideo = (params)=>getAction("/api/index/home_video",params);




// 自如寓 
export const freelyBanner = (params)=>getAction("/api/index/freely_banner",params);
// APP轮播 
export const appBanner = (params)=>getAction("/api/index/app_banner",params);
// 二维码 
export const appCode = (params)=>getAction("/api/index/app_code",params);

//  服务接口
// GET 轮播 
export const serviceIndex = (params)=>getAction("/api/service/index",params);
// GET 评论 
export const serviceEvaluate = (params)=>getAction("/api/service/service_evaluate",params);
// GET 我们的成长 
export const serviceGroup = (params)=>getAction("/api/service/service_group",params);
// GET 项目 
export const serviceProject = (params)=>getAction("/api/service/service_project",params);
// GET 关键词 
export const serviceImport = (params)=>getAction("/api/service/service_import",params);

 
// 加入我们接口
// 轮播 
export const joinBanner = (params)=>getAction("/api/join/join_banner",params);
// GET 招聘分类 
export const joinRecruit = (params)=>getAction("/api/join/join_recruit",params);
// GET 员工关怀 
export const joinStaff = (params)=>getAction("/api/join/join_staff",params);
// 活动 
export const joinActivity = (params)=>getAction("/api/join/join_activity",params);
// GET 文化 
export const joinCulture = (params)=>getAction("/api/join/join_culture",params);
// GET 团队 
export const joinTeam = (params)=>getAction("/api/join/join_team",params);
// GET 团队 
export const joinSign = (params)=>getAction("/api/join/sign",params);
// GET 职位搜索 
export const jonLike = (params)=>getAction("/api/join/jon_like",params);




// 企悦会接口
// 轮播图
export const companyIndex = (params)=>getAction("/api/company/index",params);
// GET 合作伙伴
export const companyPartner = (params)=>getAction("/api/company/company_partner",params);
// GET 产品
export const companyProduct = (params)=>getAction("/api/company/company_product",params);
// GET 会员
export const companyUser = (params)=>getAction("/api/company/company_user",params);
// GET 福利
export const companyWelfare = (params)=>getAction("/api/company/company_welfare",params);



// POST 文件上传
export const uploadFile = (params)=>upLoadFile("/api/common/upload",params);
