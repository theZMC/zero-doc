"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[1357],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,N=p["".concat(m,".").concat(c)]||p[c]||u[c]||l;return n?r.createElement(N,i(i({ref:t},s),{},{components:n})):r.createElement(N,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:4},m="\u6784\u5efaModel",d={unversionedId:"build-tool/model",id:"build-tool/model",title:"\u6784\u5efaModel",description:"goctl model \u4e3ago-zero\u4e0b\u7684\u5de5\u5177\u6a21\u5757\u4e2d\u7684\u7ec4\u4ef6\u4e4b\u4e00\uff0c\u76ee\u524d\u652f\u6301\u8bc6\u522bmysql ddl\u8fdb\u884cmodel\u5c42\u4ee3\u7801\u751f\u6210\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u6216\u8005idea\u63d2\u4ef6\uff08\u5373\u5c06\u652f\u6301\uff09\u53ef\u4ee5\u6709\u9009\u62e9\u5730\u751f\u6210\u5e26redis cache\u6216\u8005\u4e0d\u5e26redis cache\u7684\u4ee3\u7801\u903b\u8f91\u3002",source:"@site/docs/build-tool/model.md",sourceDirName:"build-tool",slug:"/build-tool/model",permalink:"/docs/build-tool/model",editUrl:"https://github.com/zeromicro/zero-doc/tree/main/website/docs/build-tool/model.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6784\u5efaRPC",permalink:"/docs/build-tool/rpc"},next:{title:"\u81ea\u5b9a\u4e49\u63d2\u4ef6",permalink:"/docs/build-tool/plugin"}},s=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",children:[],level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[],level:2},{value:"\u751f\u6210\u89c4\u5219",id:"\u751f\u6210\u89c4\u5219",children:[],level:2},{value:"\u7f13\u5b58",id:"\u7f13\u5b58",children:[],level:2}],u={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6784\u5efamodel"},"\u6784\u5efaModel"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"goctl model")," \u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"go-zero"),"\u4e0b\u7684\u5de5\u5177\u6a21\u5757\u4e2d\u7684\u7ec4\u4ef6\u4e4b\u4e00\uff0c\u76ee\u524d\u652f\u6301\u8bc6\u522b",(0,l.kt)("inlineCode",{parentName:"p"},"mysql ddl"),"\u8fdb\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"model"),"\u5c42\u4ee3\u7801\u751f\u6210\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"idea"),"\u63d2\u4ef6\uff08\u5373\u5c06\u652f\u6301\uff09\u53ef\u4ee5\u6709\u9009\u62e9\u5730\u751f\u6210\u5e26",(0,l.kt)("inlineCode",{parentName:"p"},"redis cache"),"\u6216\u8005\u4e0d\u5e26",(0,l.kt)("inlineCode",{parentName:"p"},"redis cache"),"\u7684\u4ee3\u7801\u903b\u8f91\u3002"),(0,l.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7ddl\u751f\u6210"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl model mysql ddl -src="./*.sql" -dir="./sql/model" -c\n')),(0,l.kt)("p",{parentName:"li"},"\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u540e\u5373\u53ef\u5feb\u901f\u751f\u6210CURD\u4ee3\u7801\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"model\n\u2502\xa0\xa0 \u251c\u2500\u2500 error.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 usermodel.go\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7datasource\u751f\u6210"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl model mysql datasource -url="user:password@tcp(127.0.0.1:3306)/database" -table="*"  -dir="./model"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u751f\u6210\u4ee3\u7801\u793a\u4f8b"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package model\n\nimport (\n    "database/sql"\n    "fmt"\n    "strings"\n    "time"\n\n    "github.com/zeromicro/go-zero/core/stores/builder"\n    "github.com/zeromicro/go-zero/core/stores/cache"\n    "github.com/zeromicro/go-zero/core/stores/sqlc"\n    "github.com/zeromicro/go-zero/core/stores/sqlx"\n    "github.com/zeromicro/go-zero/core/stringx"\n)\n\nvar (\n    userFieldNames          = builder.RawFieldNames(&User{})\n    userRows                = strings.Join(userFieldNames, ",")\n    userRowsExpectAutoSet   = strings.Join(stringx.Remove(userFieldNames, "`id`", "`create_time`", "`update_time`"), ",")\n    userRowsWithPlaceHolder = strings.Join(stringx.Remove(userFieldNames, "`id`", "`create_time`", "`update_time`"), "=?,") + "=?"\n\n    cacheUserNamePrefix   = "cache#User#name#"\n    cacheUserMobilePrefix = "cache#User#mobile#"\n    cacheUserIdPrefix     = "cache#User#id#"\n    cacheUserPrefix       = "cache#User#user#"\n)\n\ntype (\n    UserModel interface {\n        Insert(data User) (sql.Result, error)\n        FindOne(id int64) (*User, error)\n        FindOneByUser(user string) (*User, error)\n        FindOneByName(name string) (*User, error)\n        FindOneByMobile(mobile string) (*User, error)\n        Update(data User) error\n        Delete(id int64) error\n    }\n\n    defaultUserModel struct {\n        sqlc.CachedConn\n        table string\n    }\n\n    User struct {\n        Id         int64     `db:"id"`\n        User       string    `db:"user"`     // \u7528\u6237\n        Name       string    `db:"name"`     // \u7528\u6237\u540d\u79f0\n        Password   string    `db:"password"` // \u7528\u6237\u5bc6\u7801\n        Mobile     string    `db:"mobile"`   // \u624b\u673a\u53f7\n        Gender     string    `db:"gender"`   // \u7537\uff5c\u5973\uff5c\u672a\u516c\u5f00\n        Nickname   string    `db:"nickname"` // \u7528\u6237\u6635\u79f0\n        CreateTime time.Time `db:"create_time"`\n        UpdateTime time.Time `db:"update_time"`\n    }\n)\n\nfunc NewUserModel(conn sqlx.SqlConn, c cache.CacheConf) UserModel {\n    return &defaultUserModel{\n        CachedConn: sqlc.NewConn(conn, c),\n        table:      "`user`",\n    }\n}\n\nfunc (m *defaultUserModel) Insert(data User) (sql.Result, error) {\n    userNameKey := fmt.Sprintf("%s%v", cacheUserNamePrefix, data.Name)\n    userMobileKey := fmt.Sprintf("%s%v", cacheUserMobilePrefix, data.Mobile)\n    userKey := fmt.Sprintf("%s%v", cacheUserPrefix, data.User)\n    ret, err := m.Exec(func(conn sqlx.SqlConn) (result sql.Result, err error) {\n        query := fmt.Sprintf("insert into %s (%s) values (?, ?, ?, ?, ?, ?)", m.table, userRowsExpectAutoSet)\n        return conn.Exec(query, data.User, data.Name, data.Password, data.Mobile, data.Gender, data.Nickname)\n    }, userNameKey, userMobileKey, userKey)\n    return ret, err\n}\n\nfunc (m *defaultUserModel) FindOne(id int64) (*User, error) {\n    userIdKey := fmt.Sprintf("%s%v", cacheUserIdPrefix, id)\n    var resp User\n    err := m.QueryRow(&resp, userIdKey, func(conn sqlx.SqlConn, v interface{}) error {\n        query := fmt.Sprintf("select %s from %s where `id` = ? limit 1", userRows, m.table)\n        return conn.QueryRow(v, query, id)\n    })\n    switch err {\n    case nil:\n        return &resp, nil\n    case sqlc.ErrNotFound:\n        return nil, ErrNotFound\n    default:\n        return nil, err\n    }\n}\n\nfunc (m *defaultUserModel) FindOneByUser(user string) (*User, error) {\n    userKey := fmt.Sprintf("%s%v", cacheUserPrefix, user)\n    var resp User\n    err := m.QueryRowIndex(&resp, userKey, m.formatPrimary, func(conn sqlx.SqlConn, v interface{}) (i interface{}, e error) {\n        query := fmt.Sprintf("select %s from %s where `user` = ? limit 1", userRows, m.table)\n        if err := conn.QueryRow(&resp, query, user); err != nil {\n            return nil, err\n        }\n        return resp.Id, nil\n    }, m.queryPrimary)\n    switch err {\n    case nil:\n        return &resp, nil\n    case sqlc.ErrNotFound:\n        return nil, ErrNotFound\n    default:\n        return nil, err\n    }\n}\n\nfunc (m *defaultUserModel) FindOneByName(name string) (*User, error) {\n    userNameKey := fmt.Sprintf("%s%v", cacheUserNamePrefix, name)\n    var resp User\n    err := m.QueryRowIndex(&resp, userNameKey, m.formatPrimary, func(conn sqlx.SqlConn, v interface{}) (i interface{}, e error) {\n        query := fmt.Sprintf("select %s from %s where `name` = ? limit 1", userRows, m.table)\n        if err := conn.QueryRow(&resp, query, name); err != nil {\n            return nil, err\n        }\n        return resp.Id, nil\n    }, m.queryPrimary)\n    switch err {\n    case nil:\n        return &resp, nil\n    case sqlc.ErrNotFound:\n        return nil, ErrNotFound\n    default:\n        return nil, err\n    }\n}\n\nfunc (m *defaultUserModel) FindOneByMobile(mobile string) (*User, error) {\n    userMobileKey := fmt.Sprintf("%s%v", cacheUserMobilePrefix, mobile)\n    var resp User\n    err := m.QueryRowIndex(&resp, userMobileKey, m.formatPrimary, func(conn sqlx.SqlConn, v interface{}) (i interface{}, e error) {\n        query := fmt.Sprintf("select %s from %s where `mobile` = ? limit 1", userRows, m.table)\n        if err := conn.QueryRow(&resp, query, mobile); err != nil {\n            return nil, err\n        }\n        return resp.Id, nil\n    }, m.queryPrimary)\n    switch err {\n    case nil:\n        return &resp, nil\n    case sqlc.ErrNotFound:\n        return nil, ErrNotFound\n    default:\n        return nil, err\n    }\n}\n\nfunc (m *defaultUserModel) Update(data User) error {\n    userIdKey := fmt.Sprintf("%s%v", cacheUserIdPrefix, data.Id)\n    _, err := m.Exec(func(conn sqlx.SqlConn) (result sql.Result, err error) {\n        query := fmt.Sprintf("update %s set %s where `id` = ?", m.table, userRowsWithPlaceHolder)\n        return conn.Exec(query, data.User, data.Name, data.Password, data.Mobile, data.Gender, data.Nickname, data.Id)\n    }, userIdKey)\n    return err\n}\n\nfunc (m *defaultUserModel) Delete(id int64) error {\n    data, err := m.FindOne(id)\n    if err != nil {\n        return err\n    }\n\n    userNameKey := fmt.Sprintf("%s%v", cacheUserNamePrefix, data.Name)\n    userMobileKey := fmt.Sprintf("%s%v", cacheUserMobilePrefix, data.Mobile)\n    userIdKey := fmt.Sprintf("%s%v", cacheUserIdPrefix, id)\n    userKey := fmt.Sprintf("%s%v", cacheUserPrefix, data.User)\n    _, err = m.Exec(func(conn sqlx.SqlConn) (result sql.Result, err error) {\n        query := fmt.Sprintf("delete from %s where `id` = ?", m.table)\n        return conn.Exec(query, id)\n    }, userNameKey, userMobileKey, userIdKey, userKey)\n    return err\n}\n\nfunc (m *defaultUserModel) formatPrimary(primary interface{}) string {\n    return fmt.Sprintf("%s%v", cacheUserIdPrefix, primary)\n}\n\nfunc (m *defaultUserModel) queryPrimary(conn sqlx.SqlConn, v, primary interface{}) error {\n    query := fmt.Sprintf("select %s from %s where `id` = ? limit 1", userRows, m.table)\n    return conn.QueryRow(v, query, primary)\n}\n\n')))),(0,l.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"$ goctl model mysql -h\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'NAME:\n   goctl model mysql - generate mysql model"\n\nUSAGE:\n   goctl model mysql command [command options] [arguments...]\n\nCOMMANDS:\n   ddl         generate mysql model from ddl"\n   datasource  generate model from datasource"\n\nOPTIONS:\n   --help, -h  show help\n')),(0,l.kt)("h2",{id:"\u751f\u6210\u89c4\u5219"},"\u751f\u6210\u89c4\u5219"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u89c4\u5219"),(0,l.kt)("p",{parentName:"li"},"\u6211\u4eec\u9ed8\u8ba4\u7528\u6237\u5728\u5efa\u8868\u65f6\u4f1a\u521b\u5efacreateTime\u3001updateTime\u5b57\u6bb5(\u5ffd\u7565\u5927\u5c0f\u5199\u3001\u4e0b\u5212\u7ebf\u547d\u540d\u98ce\u683c)\u4e14\u9ed8\u8ba4\u503c\u5747\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"CURRENT_TIMESTAMP"),"\uff0c\u800cupdateTime\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"p"},"ON UPDATE CURRENT_TIMESTAMP"),"\uff0c\u5bf9\u4e8e\u8fd9\u4e24\u4e2a\u5b57\u6bb5\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"insert"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"update"),"\u65f6\u4f1a\u88ab\u79fb\u9664\uff0c\u4e0d\u5728\u8d4b\u503c\u8303\u7574\u5185\uff0c\u5f53\u7136\uff0c\u5982\u679c\u4f60\u4e0d\u9700\u8981\u8fd9\u4e24\u4e2a\u5b57\u6bb5\u90a3\u4e5f\u65e0\u5927\u788d\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5e26\u7f13\u5b58\u6a21\u5f0f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ddl"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl model mysql -src={patterns} -dir={dir} -cache\n")),(0,l.kt)("p",{parentName:"li"},"help"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"NAME:\n   goctl model mysql ddl - generate mysql model from ddl\n\nUSAGE:\n   goctl model mysql ddl [command options] [arguments...]\n\nOPTIONS:\n   --src value, -s value  the path or path globbing patterns of the ddl\n   --dir value, -d value  the target dir\n   --style value          the file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]\n   --cache, -c            generate code with cache [optional]\n   --idea                 for idea plugin [optional]\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"datasource"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl model mysql datasource -url={datasource} -table={patterns}  -dir={dir} -cache=true\n")),(0,l.kt)("p",{parentName:"li"},"help"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},'NAME:\n   goctl model mysql datasource - generate model from datasource\n\nUSAGE:\n   goctl model mysql datasource [command options] [arguments...]\n\nOPTIONS:\n   --url value              the data source of database,like "root:password@tcp(127.0.0.1:3306)/database\n   --table value, -t value  the table or table globbing patterns in the database\n   --cache, -c              generate code with cache [optional]\n   --dir value, -d value    the target dir\n   --style value            the file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]\n   --idea                   for idea plugin [optional]\n')))))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"goctl model mysql ddl/datasource \u5747\u65b0\u589e\u4e86\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"--style"),"\u53c2\u6570\uff0c\u7528\u4e8e\u6807\u8bb0\u6587\u4ef6\u547d\u540d\u98ce\u683c\u3002"))),(0,l.kt)("p",null,"  \u76ee\u524d\u4ec5\u652f\u6301redis\u7f13\u5b58\uff0c\u5982\u679c\u9009\u62e9\u5e26\u7f13\u5b58\u6a21\u5f0f\uff0c\u5373\u751f\u6210\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"FindOne(ByXxx)"),"&",(0,l.kt)("inlineCode",{parentName:"p"},"Delete"),"\u4ee3\u7801\u4f1a\u751f\u6210\u5e26\u7f13\u5b58\u903b\u8f91\u7684\u4ee3\u7801\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u5355\u7d22\u5f15\u5b57\u6bb5\uff08\u9664\u5168\u6587\u7d22\u5f15\u5916\uff09\uff0c\u5bf9\u4e8e\u8054\u5408\u7d22\u5f15\u6211\u4eec\u9ed8\u8ba4\u8ba4\u4e3a\u4e0d\u9700\u8981\u5e26\u7f13\u5b58\uff0c\u4e14\u4e0d\u5c5e\u4e8e\u901a\u7528\u578b\u4ee3\u7801\uff0c\u56e0\u6b64\u6ca1\u6709\u653e\u5728\u4ee3\u7801\u751f\u6210\u884c\u5217\uff0c\u5982example\u4e2duser\u8868\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"mobile"),"\u5b57\u6bb5\u5747\u5c5e\u4e8e\u5355\u5b57\u6bb5\u7d22\u5f15\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u5e26\u7f13\u5b58\u6a21\u5f0f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ddl"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$  goctl model -src={patterns} -dir={dir}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"datasource"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$  goctl model mysql datasource -url={datasource} -table={patterns}  -dir={dir}\n")))),(0,l.kt)("p",{parentName:"li"},"or"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ddl"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$  goctl model -src={patterns} -dir={dir}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"datasource"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$  goctl model mysql datasource -url={datasource} -table={patterns}  -dir={dir}\n")))))),(0,l.kt)("p",null,"\u751f\u6210\u4ee3\u7801\u4ec5\u57fa\u672c\u7684CURD\u7ed3\u6784\u3002"),(0,l.kt)("h2",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7f13\u5b58\u8fd9\u4e00\u5757\u6211\u9009\u62e9\u7528\u4e00\u95ee\u4e00\u7b54\u7684\u5f62\u5f0f\u8fdb\u884c\u7f57\u5217\u3002\u6211\u60f3\u8fd9\u6837\u80fd\u591f\u66f4\u6e05\u6670\u7684\u63cf\u8ff0model\u4e2d\u7f13\u5b58\u7684\u529f\u80fd\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7f13\u5b58\u4f1a\u7f13\u5b58\u54ea\u4e9b\u4fe1\u606f\uff1f"),(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u4e3b\u952e\u5b57\u6bb5\u7f13\u5b58\uff0c\u4f1a\u7f13\u5b58\u6574\u4e2a\u7ed3\u6784\u4f53\u4fe1\u606f\uff0c\u800c\u5bf9\u4e8e\u5355\u7d22\u5f15\u5b57\u6bb5\uff08\u9664\u5168\u6587\u7d22\u5f15\uff09\u5219\u7f13\u5b58\u4e3b\u952e\u5b57\u6bb5\u503c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6570\u636e\u6709\u66f4\u65b0\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"update"),"\uff09\u64cd\u4f5c\u4f1a\u6e05\u7a7a\u7f13\u5b58\u5417\uff1f"),(0,l.kt)("p",{parentName:"li"},"\u4f1a\uff0c\u4f46\u4ec5\u6e05\u7a7a\u4e3b\u952e\u7f13\u5b58\u7684\u4fe1\u606f\uff0cwhy\uff1f\u8fd9\u91cc\u5c31\u4e0d\u505a\u8be6\u7ec6\u8d58\u8ff0\u4e86\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e3a\u4ec0\u4e48\u4e0d\u6309\u7167\u5355\u7d22\u5f15\u5b57\u6bb5\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"updateByXxx"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"deleteByXxx"),"\u7684\u4ee3\u7801\uff1f"),(0,l.kt)("p",{parentName:"li"},"\u7406\u8bba\u4e0a\u662f\u6ca1\u4efb\u4f55\u95ee\u9898\uff0c\u4f46\u662f\u6211\u4eec\u8ba4\u4e3a\uff0c\u5bf9\u4e8emodel\u5c42\u7684\u6570\u636e\u64cd\u4f5c\u5747\u662f\u4ee5\u6574\u4e2a\u7ed3\u6784\u4f53\u4e3a\u5355\u4f4d\uff0c\u5305\u62ec\u67e5\u8be2\uff0c\u6211\u4e0d\u5efa\u8bae\u53ea\u67e5\u8be2\u67d0\u90e8\u5206\u5b57\u6bb5\uff08\u4e0d\u53cd\u5bf9\uff09\uff0c\u5426\u5219\u6211\u4eec\u7684\u7f13\u5b58\u5c31\u6ca1\u6709\u610f\u4e49\u4e86\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e3a\u4ec0\u4e48\u4e0d\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"p"},"findPageLimit"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"findAll"),"\u8fd9\u4e48\u6a21\u5f0f\u4ee3\u7801\u751f\u5c42\uff1f"),(0,l.kt)("p",{parentName:"li"},"\u76ee\u524d\uff0c\u6211\u8ba4\u4e3a\u9664\u4e86\u57fa\u672c\u7684CURD\u5916\uff0c\u5176\u4ed6\u7684\u4ee3\u7801\u5747\u5c5e\u4e8e",(0,l.kt)("i",null,"\u4e1a\u52a1\u578b"),"\u4ee3\u7801\uff0c\u8fd9\u4e2a\u6211\u89c9\u5f97\u5f00\u53d1\u4eba\u5458\u6839\u636e\u4e1a\u52a1\u9700\u8981\u8fdb\u884c\u7f16\u5199\u66f4\u597d\u3002"))),(0,l.kt)("h1",{id:"\u7c7b\u578b\u8f6c\u6362\u89c4\u5219"},"\u7c7b\u578b\u8f6c\u6362\u89c4\u5219"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"mysql dataType"),(0,l.kt)("th",{parentName:"tr",align:null},"golang dataType"),(0,l.kt)("th",{parentName:"tr",align:null},"golang dataType(if null&&default null)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"smallint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mediumint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bigint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullFloat64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"float64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullFloat64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"float64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullFloat64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"datetime"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"year"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"varchar"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binary"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"varbinary"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tinytext"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mediumtext"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"longtext"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enum"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"set"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")))))}p.isMDXComponent=!0}}]);