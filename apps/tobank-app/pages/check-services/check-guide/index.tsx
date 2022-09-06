import React from 'react';

import { PageHeader, Space, Typography, List, Row, Col, Card } from 'antd';

const { Title, Text } = Typography;

interface IProps {}

const CheckGuide: React.FC<IProps> = (props) => {
  return (
    <div className="container">
      <PageHeader title="قوانین چک های تایید شده"></PageHeader>
      <Space direction="vertical" size={16} className="w-100">
        <List
          header={<Title level={5}>مشخصات ظاهری چک‌های جدید</Title>}
          dataSource={[
            'رنگ این چک‌ها بنفش است.',
            'در چک‌های جدید شناسه یکتای ۱۶ رقمی در سمت چپ بالای هر برگ چک دیده می‌شود. همچنین بارکد نیز بر روی هر برگ چک چاپ می‌شود.',
            'درج عبارت «کارسازی این چک منوط به ثبت صدور، دریافت و انتقال آن در سامانه صیاد است.»',
          ]}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <List
          header={
            <Space direction="vertical">
              <Title level={5}>مشخصات ظاهری چک‌های جدید</Title>
              <Text>
                تمام صادرکنندگان، انتقال‌دهندگان و ذینفعان چک، ملزم به رعایت
                موارد زیر می‌باشند:
              </Text>
            </Space>
          }
          dataSource={[
            'لزوم ثبت تمام چک‌های جدید در سامانه صیاد، هنگام ثبت، تایید و انتقال',
            'ممنوعیت دارندگان چک برگشتی رفع سوء اثر نشده، از صدور چک جدید و ثبت آن در سامانه صیاد',
            'لزوم صدور چک‌ در وجه ذینفع مشخص و ممنوعیت صدور آن در وجه حامل',
            'جایگزینی پشت‌نویسی چک‌های طرح جدید از طریق ثبت انتقال در سامانه صیاد',
          ]}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <h3>ثبت، صدور و انتقال چک در سامانه صیاد</h3>
        <ul>
          <li>
            <h4>ابزارهای دسترسی به سامانه صیاد:</h4>
            <ol>
              <li>
                <h4>اینترنت‌بانک و برنامک موبایلی بانک</h4>
                <p>
                  امکان دسترسی به ابزار فوق را کاربر می‌بایست از بانک خود
                  درخواست کند. کاربر می‌تواند فرآیندهای ثبت، تایید و انتقال چک
                  در سامانه صیاد را از طریق ابزار یاد شده صورت دهد. لازم به ذکر
                  است، امکان ثبت چک صرفاً از طریق بانک صادرکننده آن دسته چک
                  امکان‌پذیر می‌باشد. این در حالی است که سایر فرآیندها از قبیل
                  تایید و یا انتقال چک هر یک از بانک‌ها توسط ابزار فوق
                  امکان‌پذیر بوده و نیازی به یکسان بودن بانک کاربر با بانک
                  صادرکننده آن چک (که لزوما متعلق به آن شخص نیست) نمی‌باشد.
                </p>
              </li>
              <li>
                <h4>برنامک‌های موبایلی حوزه پرداخت:</h4>
                <p>
                  با توجه به در دسترس‌بودن برنامک‌های حوزه پرداخت، خدمات
                  پرکاربرد از قبیل امکان ثبت چک (متعلق به هر یک از بانک‌ها)،
                  تایید چک (چکی که کاربر به عنوان ذی‌نفع قصد دریافت آن را دارد و
                  نیاز است تا پیش از دریافت فیزیک چک، مندرجات آن را استعلام کرده
                  و با فیزیک چک تطبیق دهد) و هم‌چنین انتقال چک، توسط برنامک‌های
                  یاد شده ارائه می‌شوند. لازم به ذکر است، نیازی به انجام هیچ
                  اقدامی از جانب بانک، برای دسترسی به برنامک‌های یاد شده وجود
                  نداشته و افراد می‌توانند برنامک‌‌های فوق را دانلود و استفاده
                  کنند. هم‌چنین خاطر نشان می‌سازد، برنامک‌های حوزه پرداخت صرفاً
                  امکان ارائه خدمت به مشتریان حقیقی و حساب‌های انفرادی را دارا
                  می‌باشند. مراجعه به سامانه صیاد از طریق برنامک‌های موبایلی
                  حوزه پرداخت برای ثبت، تایید یا انتقال چک صرفا باید از طریق
                  تلفن‌همراهی که سیم‌کارت آن متعلق به خود شخص است، انجام شود.
                </p>
                <p>
                  (مجموعه برنامک‌های قابل استفاده در این حوزه از طریق وب‌سایت
                  شرکت شبکه الکترونیکی پرداخت کارت (شاپرک) به نشانی
                  www.shaparak.ir قابل دریافت و نصب می‌باشد).
                </p>
              </li>
              <li>
                <h4>مراجعه به شعب بانک‌های عامل:</h4>
                <p>
                  تمام شعب شبکه بانکی قابلیت ارائه خدمات سامانه صیاد را دارا
                  می‌باشند و قادر هستند برای آن دسته از مشتریانی که امکان دسترسی
                  به ابزار غیرحضوری را ندارند، اقدام‌های لازم را از جانب آنان
                  صورت دهند. لازم به ذکر است، به منظور ثبت چک، شخص صادرکننده
                  صرفاً می‌تواند به بانک صادرکننده دسته چک خود مراجعه کرده و در
                  زمان تایید دریافت چک نیز شخص تایید‌کننده(ذینفع) می‌تواند صرفاً
                  به بانک خود (بانکی که در آن دارای حساب فعال می‌باشد) مراجعه
                  کند و فرآیند تایید از سوی شخص و توسط بانک صورت گیرد.
                </p>
              </li>
              <li>
                سایر ابزار مورد استفاده برای ارائه خدمات چک به مشتریان از جمله
                تلفن‌بانک، ابزار پیامکی، کدهای دستوری و سایر روش‌هایی که توسط
                شبکه بانکی اطلاع‌رسانی خواهند شد.
              </li>
            </ol>
          </li>
          <li>
            <p>فرایندهای مرتبط با چک در سامانه صیاد:</p>
            <ol>
              <li>
                <h4>ثبت چک:</h4>
                <p>
                  پس از درج مندرجات چک در برگ آن، صادر کننده به یکی از ابزارهای
                  دسترسی به سامانه صیاد مراجعه کرده و ‌سپس اقدام به ورود اطلاعات
                  چک و اطلاعات هویتی ذینفع/ذینفعان می‌کند. لازم به ذکر است این
                  مرحله به عنوان ثبت اولیه چک تلقی شده و ثبت نهایی چک در سامانه
                  صیاد مستلزم تایید دریافت چک توسط ذینفع آن است.
                </p>
                <p>خلاصه اقدامات مذکور به شرح زیر است:</p>
                <ul>
                  <li>
                    ثبت مندرجات شامل تاریخ سررسید، مبلغ و اطلاعات هویتی ذینفع در
                    برگ چک
                  </li>
                  <li>مراجعه به یکی از ابزارهای دسترسی به سامانه صیاد</li>
                  <li>
                    <p>احراز هویت</p>
                    <ul>
                      <li>
                        احراز هویت در اینترنت‌بانک و برنامک موبایلی بانک، صرفاً
                        یک بار پس از دریافت نام کاربری و رمز عبور این برنامه‌ها
                        انجام می‌شود.
                      </li>
                      <li>
                        احراز هویت در برنامک‌های موبایلی حوزه پرداخت از طریق
                        ورود اطلاعات يکي از کارت‌هاي بانکي متعلق به صادرکننده چک
                        نزد همان بانکی که دسته چک وي را صادر کرده است، انجام
                        می‌شود.
                      </li>
                      <li>
                        احراز هویت در شعب بانک‌های عامل طبق روال‌های موجود انجام
                        می‌شود.
                      </li>
                      <li>ورود مندرجات چک در سامانه صیاد</li>
                      <li>تایید و ثبت اولیه چک</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h3>استعلام و تایید دریافت چک(توسط ذینفع)</h3>
                <p>
                  با توجه به اینکه ثبت نهایی چک منوط به استعلام و تطبیق مندرجات
                  برگ چک با اطلاعات ثبت شده در سامانه صیاد می‌باشد، گیرنده چک با
                  در دست داشتن برگ چک اقدامات زیر را صورت خواهد داد:
                </p>
                <ul>
                  <li>
                    مراجعه به یکی از ابزارهای دسترسی به سامانه صیاد (لزومی به
                    یکسان بودن ابزار مورد استفاده توسط صادرکننده و تایید‌کننده
                    چک وجود ندارد)
                  </li>
                  <li>
                    <p>احراز هویت</p>
                    <ul>
                      <li>
                        احراز هویت در اینترنت‌بانک و برنامک موبایلی بانک، پس از
                        دریافت نام کاربری و رمز عبور این برنامه‌ها انجام می‌شود.
                      </li>
                      <li>
                        احراز هویت در برنامک‌های موبایلی حوزه پرداخت یکی از
                        مراحل استعلام و تایید دریافت چک است و از طریق ورود
                        اطلاعات يکي از کارت‌هاي بانکي متعلق به ذینفع چک انجام
                        می‌شود.
                      </li>
                      <li>
                        احراز هویت در شعب بانک‌های عامل طبق روال‌های موجود انجام
                        می‌شود
                      </li>
                    </ul>
                  </li>
                  <li>
                    استعلام و تطبیق مندرجات برگ چک شامل تاریخ سررسید، مبلغ،
                    اطلاعات هویتی ذینفع و بابت
                  </li>
                  <li>
                    <p>تایید یا رد چک براساس انطباق یا عدم انطباق مندرجات</p>
                    <ul>
                      <li>
                        در صورت تایید چک: چک در وضعیت ثبت نهایی تلقی می‌شود و
                        قابلیت نقد شدن در سررسید را خواهد داشت.
                      </li>
                      <li>
                        در صورت رد چک: ذینفع ضمن انتخاب حداقل یکی از دلایل مندرج
                        در سامانه، می‌بایست فیزیک چک را به
                        صادرکننده/انتقال‌دهنده عودت دهد.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h3>انتقال چک</h3>
                <p>
                  در قانون جدید چک پشت‌نویسی با درج اطلاعات مربوطه در سامانه
                  صیاد جایگزین شده است. براین اساس، مراحل زیر توسط انتقال دهنده
                  چک می‌بایست انجام گیرد:
                </p>
                <ul>
                  <li>مراجعه به یکی از ابزارهای دسترسی به سامانه صیاد</li>
                  <li>
                    <p>احراز هویت</p>
                    <ul>
                      <li>
                        احراز هویت در اینترنت‌بانک و برنامک موبایلی بانک، پس از
                        دریافت نام کاربری و رمز عبور این برنامه‌ها انجام می‌شود.
                      </li>
                      <li>
                        احراز هویت در برنامک‌های موبایلی حوزه پرداخت یکی از
                        مراحل استعلام و تایید دریافت چک است و از طریق ورود
                        اطلاعات يکي از کارت‌هاي بانکي متعلق به ذینفع چک انجام
                        می‌شود
                      </li>
                      <li>
                        احراز هویت در شعب بانک‌های عامل طبق روال‌های موجود انجام
                        می‌شود
                      </li>
                    </ul>
                  </li>
                  <li>
                    ورود شناسه صیادی برگ چک متعلق به انتقال دهنده در سامانه صیاد
                  </li>
                  <li>
                    ورود اطلاعات مربوط به قلم اطلاعاتی بابت و هویت ذینفع جدید
                    چک(انتقال‌گیرنده)
                  </li>
                  <li>تایید و ثبت اولیه انتقال چک</li>
                </ul>
              </li>
              <li>
                <h3>استعلام وضعیت اعتباری صادرکننده چک</h3>
                <p>
                  امکان استعلام وضعیت اعتباری صادرکننده چک از طریق ورود شناسه ۱۶
                  رقمی صیادی برگ چک در سامانه صیاد وجود دارد. علاوه بر ابزارهای
                  دسترسی به سامانه صیاد، خدمت مذکور از طریق روش‌های زیر قابل
                  دریافت می‌باشد:
                </p>
                <ol>
                  <li>
                    <h3>پورتال بانک مرکزی</h3>
                    <p>
                      با مراجعه به پایگاه اطلاع‌رسانی بانک مرکزی به نشانی
                      www.cbi.ir و صفحه استعلام وضعیت اعتباری چک صیادی، با ارسال
                      شناسه استعلام 16 رقمی مندرج در چک‌های صیادی، نسبت به وضعیت
                      اعتباری کلی صادرکننده چک از نظر تعداد و مبلغ چک های برگشتی
                      رفع سوء اثر نشده نزد شبکه بانک مطلع شوید. لازم به ذکر است،
                      این اطلاعات در قالب دسته‌بندی‌هایی که شرح جزئیات آن‌ها در
                      تارنمای این بانک موجود است، ارائه می‌شود.
                    </p>
                  </li>
                  <li>
                    <h3>سامانه پیامکی ۷۰۱۷۰۱</h3>
                    <p>
                      سامانه پیامکی ۷۰۱۷۰۱ امکان استعلام وضعیت اعتباری کلی شخص
                      صادرکننده چک، از نظر تعداد و مبلغ چک‌های برگشتی رفع سوء
                      اثر نشده، نزد شبکه بانکی را فراهم می‌سازد.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <h3>استعلام وضعیت چک (صادرکننده-دارنده چک)</h3>
                <p>
                  شخص صادرکننده چک، قادر به مشاهده وضعیت و مندرجات چک ثبت شده در
                  سامانه صیاد(پیش از تایید ذینفع) با استفاده از شناسه صیادی برگ
                  چک مذکور خواهد بود.
                </p>
              </li>
              <li>
                <h3>استعلام وضعیت چک (ذینفع)</h3>
                <p>
                  ذینفع یا دارنده چک با شناسه صیادی و شماره ملی خود قادر به
                  مشاهده وضعیت و مندرجات چک ثبت شده در سامانه صیاد می‌باشد.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <h3>نحوه وصول چک‌های ثبت شده در سامانه صیاد</h3>
            <p>
              مالک نهایی چک (آخرین ذی‌نفع چک) در تاریخ سررسید آن، با مراجعه به
              شعبه هر کدام از بانک‌های کشور می‌تواند نسبت به وصول مبلغ چک اقدام
              کند. بدین ترتیب بانک موظف خواهد بود پس از انجام استعلام‌های لازم
              از سامانه‌ صیاد، نسبت به مالکیت شخص ذی‌نفع (شخصی که وجه چک به حساب
              ایشان واریز خواهد شد) اطمینان حاصل کرده و سپس اقدامات لازم را در
              این خصوص صورت دهد. در صورت کسری حساب صادرکننده (شخصی که چک در
              ابتدا متعلق به او بوده است) می تواند مبلغ موجود در آن حساب را طلب
              کرده و هم‌چنین خواهان پرداخت مبلغ کسری چک از محل مبالغ موجود در
              ساير حساب‌هاي انفرادي ريالي صاحب حساب در همان بانک (به ترتیب
              اعلامی توسط بانک مرکزی) شود.
            </p>
            <p>
              همچنین مطابق قانون جدید چک تمام حساب‌هاي صادرکننده چک در تمام
              بانک‌ها و موسسات اعتباري به میزان مبلغ کسری چک پس از گذشت 24 ساعت
              از ثبت غيرقابل پرداخت بودن (ثبت برگشت چک) به ترتيب اعلامي از سوي
              بانک مرکزي مسدود خواهد شد.
            </p>
          </li>
          <li>
            <h3>نحوه برگشت زدن چک و دلایل برگشت چک</h3>
            <p>
              بانک در موارد زیر، مجاز به پرداخت وجه چک نبوده و با درخواست دارنده
              چک، موظف به ثبت غیرقابل پرداخت بودن چک در سامانه یکپارچه بانک
              مرکزی و صدور گواهی‌نامه عدم‌ پرداخت متضمن کد رهگیری مطابق شرایط و
              تشریفات مقرر در قانون می‌باشد
            </p>
            <ul>
              <li>
                عدم کفایت موجودی حساب جاری و عدم امکان تأمین وجه چک از محل سایر
                حساب‌های صادرکننده چک در همان بانک به شرح مندرج در ضوابط ابلاغی
                بانک مرکزی
              </li>
              <li>
                عدم انطباق امضای مندرج در چک با نمونه امضای معرفی شده توسط مشتری
                یا وکیل/نماینده قانونی وی در حدود عرف بانکداری
              </li>
              <li>
                تشخیص اختلاف در مندرجات برگه چک در چارچوب قوانین و مقررات مربوط
              </li>
              <li>
                صدور دستور عدم پرداخت توسط صادرکننده یا ذینفع یا قائم مقام
                قانونی آنها، در چارچوب ماده (14) قانون
              </li>
              <li>
                بسته بودن حساب جاری یا انسداد بخشی ‌از/تمام موجودی آن از جمله به
                موجب قانون، دستور مرجع قضایی یا به دستور مشتری و عدم امکان تأمین
                وجه چک از محل سایر حساب‌های صادرکننده چک در همان بانک به‌گونه‌ای
                که امکان پرداخت وجه چک به طور کامل میسر نباشد
              </li>
              <li>
                قلم‌خوردگی در متن چک (درصورت فقدان ظهرنویسی مرتبط با تصحیح
                قلم‌خوردگی)
              </li>
              <li>
                عدم انطباق مندرجات برگه چک با مندرجات ثبت شده در سامانه صیاد
              </li>
              <li>سایر موارد به موجب قوانین و مقررات موضوعه</li>
            </ul>
            <p>
              لازم به تاکید است در صورت تحقق موارد فوق، بانک مکلف است به درخواست
              دارنده چک، فوراً غیر قابل پرداخت بودن آن را در سامانه یکپارچه بانک
              مرکزی ثبت کند و با دریافت کد رهگیری و درج آن در گواهینامه عدم
              پرداخت، علت یا علل عدم پرداخت را صریحاً قید و آن را امضاء، مهر و
              به متقاضی (دارنده چک) تسلیم کند.
            </p>
            <p>
              در گواهینامه عدم پرداخت باید هویت و نشانی کامل صادرکننده و دارنده
              چک، کد رهگیری دریافت شده از سامانه یکپارچه بانک مرکزی، مهر بانک و
              شخص حقوقی و وضعیت مطابقت یا عدم مطابقت امضای چک و نمونه امضای
              موجود در بانک درج شده باشد، در غیر این صورت در مراجع قضائی و ثبتی
              به آن ترتیب اثر داده نمی‌شود.
            </p>
            <p>
              دارنده چک برگشتی با در دست داشتن گواهینامه عدم پرداخت، می تواند به
              دفاتر خدمات الکترونیک قضایی قوه قضائیه رفته و درخواست صدور اجراییه
              از دادگاه صالح را کند. دادگاه با بررسی متن چک و احراز سه شرط مذکور
              در ماده (23) قانون صدور چک (1- وصول وجه آن منوط به تحقق شرطي نشده
              باشد؛ 2- در متن چك قيد نشده باشد كه چك بابت تضمين انجام معامله يا
              تعهدي است؛ و 3-گواهي عدم پرداخت به دلیل موضوع ماده 14 صادر نشده
              باشد. به این معنا که صادرکننده یا ذینفع چک اعلام نکرده باشد که چک
              مفقود یا سرقت یا جعل شده است و یا اینکه از طریق کلاه‌برداری یا
              خیانت‌ در امانت یا جرائم دیگر به دست نیامده باشد) اجرائیه را صادر
              می‌کند.
            </p>
            <p>
              از تاریخ ابلاغ اجرائیه، ۱۰ روز به صادرکننده چک برگشتی مهلت داده
              می‌شود که مطالبات خود را پرداخت کند یا با موافقت دارنده ترتیبی
              برای پرداخت آن بدهد یا مالی را معرفی کند، در غیر این‌صورت، مید بر
              حسب درخواست دارنده چک، مطابق قانون «نحوه اجرای محکومیت‌های مالی»
              اقدام خواهد شد.
            </p>
          </li>
          <li>
            <h3>نحوه رفع سوء اثر چک</h3>
            <p>
              طبق قانون جدید چک، در هر یک از موارد زیر، بانک مکلف است مراتب را
              در سامانه یکپارچه بانک مرکزی اعلام کند تا فورا و به صورت برخط از
              چک رفع سوءاثر شود:
            </p>
            <p>
              الف – واریز کسری مبلغ چک به حساب جاری نزد بانک محال‌علیه و ارائه
              درخواست مسدودی که در این صورت بانک مکلف است ضمن مسدود کردن مبلغ
              مذکور تا زمان مراجعه دارنده چک و حداکثر به مدت یک سال، ظرف مدت سه
              روز واریز مبلغ را به شیوه‌ای اطمینان‌بخش و قابل استناد به اطلاع
              دارنده چک برساند.
            </p>
            <p>ب – ارائه لاشه چک به بانک</p>
            <p>
              ج – ارائه رضایت‌نامه رسمی (تنظیم‌شده در دفاتر اسناد رسمی از دارنده
              چک یا نامه رسمی از شخص حقوقی دولتی یا عمومی غیردولتی دارنده چک به
              بانک
            </p>
            <p>
              د – ارائه نامه رسمی از مرجع قضائی یا ثبتی ذی‌صلاح مبنی بر اتمام
              عملیات اجرائی در خصوص چک به بانک
            </p>
            <p>
              ه – ارائه حکم قضائی مبنی بر برائت ذمه صاحب حساب در خصوص چک به بانک
            </p>
            <p>
              و– سپری شدن مدت سه‌سال از تاریخ صدور گواهینامه عدم پرداخت مشروط به
              اینکه درخصوص چک مورد نظر دعوای حقوقی یا کیفری در دادگاه ها و مراجع
              قضایی طرح نشده باشد.
            </p>
          </li>
          <li>
            <h3>محدودیت‌های دارندگان چک برگشتی</h3>
            <p>
              در قانون جدید چک، بعد از ثبت غیرقابل پرداخت بودن یا کسری مبلغ چک
              در سامانه یکپارچه بانک مرکزی، این سامانه مراتب را به صورت برخط به
              تمام بانک‌ها و مؤسسات اعتباری اطلاع می‌دهد. پس از گذشت بیست و چهار
              ساعت، تمام بانک‌ها و مؤسسات اعتباری حسب مورد مکلفند تا زمانی که از
              چک برگشتی رفع سوء اثر نشده است، محدودیت‌های زیر را نسبت به صاحب
              حساب و امضاکننده چک برگشتی اعمال کنند:
            </p>
            <p>
              الف- عدم امکان افتتاح هرگونه حساب و صدور کارت بانکی جدید؛ حتی صدور
              المثنی/ تمدید تاریخ اعتبار کارت/ کارت اعتباری و تسهیلات خرد
            </p>
            <p>
              ب- مسدود شدن وجوه تمام حساب‌ها و کارت‌های بانکی و هر مبلغ متعلق به
              صادرکننده که تحت هر عنوان نزد بانک‌ها یا مؤسسات اعتباری موجود است
              به میزان کسری مبلغ چک و به ترتیب اعلامی از سوی بانک مرکزی؛
            </p>
            <p>
              ج- عدم پرداخت هرگونه تسهیلات بانکی یا صدور ضمانت‌نامه‌های ارزی یا
              ریالی؛
            </p>
            <p>د- عدم گشایش اعتبار اسنادی ارزی یا ریالی.</p>
          </li>
          <li>
            <h3>موارد منع اعطای دسته چک به اشخاص</h3>
            <p>اعطای دسته چک به مشتریان زیر ممنوع است:</p>
            <ul>
              <li>اشخاص ورشکسته؛</li>
              <li>اشخاص معسر از پرداخت محکوم به؛</li>
              <li>اشخاص دارای چک برگشتی رفع سوءاثر نشده؛</li>
              <li>
                وکیل/نماینده صادرکننده (امضاء‌کننده) چک برگشتی (رفع سوءاثر نشده)
                از طرف اشخاص صاحب حساب در چارچوب قانون؛
              </li>
              <li>
                اشخاصی که بنا به رأی قطعی مراجع قضایی حسب مفاد قوانین مربوط از
                جمله موارد مقرر در قانون، به محرومیت از داشتن دسته چک محکوم
                شده‌اند؛
              </li>
              <li>
                اشخاصی که حساب جاری آن‌ها به دلایل قانونی یا حسب تصمیم مرجع
                قضایی مسدود شده و برداشت از آن ممنوع است؛ به استثنای مواردی که
                صرفاً بخشی از موجودی حساب جاری مشتری مسدود شده و برداشت مابقی
                موجودی حساب جاری وی امکان‌پذیر است؛
              </li>
              <li>
                شخاص ورشکسته، معسر از پرداخت محکوم به یا دارای چک برگشتی رفع
                سوءاثر نشده که به وکالت یا نمایندگی از طرف صاحب حساب اعم از شخص
                حقیقی یا حقوقی اقدام به اخذ دسته چک می‌کنند؛
              </li>
              <li>
                شخصی که کمتر از مجموع تعداد برگه‌های آخرین دسته چک اعطایی به وی،
                به بانک ارائه و یا تعیین تکلیف شده باشد.
              </li>
              <li>
                مشتریانی که از پذیرش الحاقیه جدید به قرارداد افتتاح حساب جاری
                استنکاف کنند.
              </li>
            </ul>
          </li>
        </ul>
      </Space>
    </div>
  );
};
export default CheckGuide;

export const getStaticProps = async () => {
  return {
    props: {
      name: 'قوانین چک های تایید شده',
    },
  };
};
